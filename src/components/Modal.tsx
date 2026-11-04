'use client';

import type React from 'react';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import * as countryCodesList from 'country-codes-list';
import PhoneInput, { parsePhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Link from 'next/link';
import { CircleCheck, CircleCheckBig, Phone, Check } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import ReCAPTCHA from 'react-google-recaptcha';
import config from '../../config';
import ContactUs from '../../public/images/contact_us_modal.webp';

interface ModalProps {
  open: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

interface ContactModalProps {
  isOpen: boolean;
  setIsModalOpen: () => void;
}

// Custom ChevronDown component
const ChevronDown = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const services = [
  'Store Speed Optimization',
  'Shopify Store',
  'Website',
  'Mobile App',
  'Custom SaaS',
  'E-commerce Site',
  'UI/UX Design',
  'Digital Marketing',
];

const myCountryCodesObject = countryCodesList.customList(
  'countryCode',
  '[{countryCode}] {countryNameEn}: +{countryCallingCode}'
);

const countryCodes1 = Object.entries(myCountryCodesObject)
  .map(([countryCode, value]) => {
    const match = value.match(/\[(\w+)\] (.*?): \+?(\d+)/);
    if (!match) return null;

    return {
      code: `+${match[3]}`,
      country: match[1],
      name: match[2],
    };
  })
  .filter(Boolean);

const Modal: React.FC<ModalProps> = ({ open, setIsModalOpen, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const [defaultCountry, setDefaultCountry] = useState<string>('IN');
  const [isLoading, setIsLoading] = useState(true);
  const detectionActive = useRef(false);

  const detectCountry = async () => {
    if (detectionActive.current) return;
    detectionActive.current = true;

    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      if (data.country) {
        setDefaultCountry(data.country);
      }
    } catch (error) {
      console.error('Could not detect country, using default:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (open) {
      setIsVisible(true);
      setFormData(initialFormData);
      setIsSuccess(false);
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
      // setTimeout(() => setIsAnimating(true), 10);
      setIsAnimating(true);

      // Call detectCountry directly when modal opens
      if (!detectionActive.current) {
        setIsLoading(true);
        detectCountry();
      }
    } else {
      setIsAnimating(false);
      // setTimeout(() => {
      //   setIsVisible(false);
      //   setIsServiceDropdownOpen(false);
      //   setIsCountryDropdownOpen(false);
      //   detectionActive.current = false; // Reset detection flag
      // }, 200);
      setIsVisible(false);
      setIsServiceDropdownOpen(false);
      setIsCountryDropdownOpen(false);
      detectionActive.current = false;
    }
  }, [open]);

  // ESC-to-close + body-scroll lock + focus trap while modal is open
  // (WCAG 2.4.3 Focus Order, 2.4.11 Focus Not Obscured: Tab never reaches the page behind)
  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        // Esc closes only the "I want" list when it is open, not the whole modal
        if (serviceDropdownOpenRef.current) {
          setIsServiceDropdownOpen(false);
          serviceTriggerRef.current?.focus();
        } else {
          setIsModalOpen(false);
        }
        return;
      }
      if (e.key !== 'Tab') return;
      const root = document.querySelector<HTMLElement>('[data-modal-root]');
      if (!root) return;
      const focusables = Array.from(
        root.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.getClientRects().length > 0);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (!active || !root.contains(active)) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
      } else if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open, setIsModalOpen]);

  // Move focus into the modal once the form is actually rendered (after country detection)
  useEffect(() => {
    if (!open || isLoading) return;
    const focusTimer = window.setTimeout(() => {
      const target =
        serviceTriggerRef.current ??
        document.querySelector<HTMLElement>('[data-modal-root] button, [data-modal-root] a[href]');
      target?.focus();
    }, 50);
    return () => window.clearTimeout(focusTimer);
  }, [open, isLoading]);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const initialFormData = {
    service: '',
    fullName: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [validationErrors, setValidationErrors] = useState({
    service: false,
    fullName: false,
    email: false,
  });

  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const serviceTriggerRef = useRef<HTMLButtonElement>(null);
  const serviceOptionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const serviceDropdownOpenRef = useRef(false);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [captchaError, setCaptchaError] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    serviceDropdownOpenRef.current = isServiceDropdownOpen;
    if (!isServiceDropdownOpen) return;
    // Focus the selected option (or the first one) when the list opens
    const selected = services.indexOf(formData.service);
    const idx = selected >= 0 ? selected : 0;
    requestAnimationFrame(() => serviceOptionRefs.current[idx]?.focus());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isServiceDropdownOpen]);

  const selectService = (service: string) => {
    handleInputChange('service', service);
    setIsServiceDropdownOpen(false);
    setValidationErrors((prev) => ({ ...prev, service: false }));
    // Keep keyboard focus on the trigger instead of dropping it to <body> (WCAG 2.4.3)
    serviceTriggerRef.current?.focus();
  };

  const handleServiceTriggerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      setIsServiceDropdownOpen(true);
    }
  };

  const handleServiceListKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const current = serviceOptionRefs.current.findIndex((el) => el === document.activeElement);
    const focusAt = (i: number) => serviceOptionRefs.current[(i + services.length) % services.length]?.focus();
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        focusAt(current + 1);
        break;
      case 'ArrowUp':
        e.preventDefault();
        focusAt(current - 1);
        break;
      case 'Home':
        e.preventDefault();
        focusAt(0);
        break;
      case 'End':
        e.preventDefault();
        focusAt(services.length - 1);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (current >= 0) selectService(services[current]);
        break;
      case 'Tab':
        e.preventDefault();
        setIsServiceDropdownOpen(false);
        serviceTriggerRef.current?.focus();
        break;
    }
  };

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Basic validation (WCAG 3.3.1 / 3.3.3: errors are shown, described and focused)
    const errors = {
      service: !formData.service,
      fullName: !formData.fullName.trim(),
      email: !isValidEmail(formData.email),
    };

    setValidationErrors(errors);

    if (Object.values(errors).some(Boolean)) {
      setIsSubmitting(false);
      if (errors.service) serviceTriggerRef.current?.focus();
      else if (errors.fullName) fullNameRef.current?.focus();
      else emailRef.current?.focus();
      return;
    }

    if (!captchaToken) {
      setCaptchaError(true);
      setIsSubmitting(false);
      return;
    }

    let phoneCode = '';
    let phoneNumber = '';

    if (formData.phone) {
      try {
        const parsedNumber = parsePhoneNumber(formData.phone);
        if (parsedNumber) {
          phoneCode = `+${parsedNumber.countryCallingCode}`;
          phoneNumber = parsedNumber.nationalNumber;
        }
      } catch (error) {
        console.error('Error parsing phone number:', error);
      }
    }

    const payload = {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      phone_no: phoneNumber,
      phone_code: phoneCode.replace('+', ''),
      choice: formData.service,
      message: formData.message,
      'g-recaptcha-response': captchaToken,
    };

    const formEncoded = new URLSearchParams(payload as any).toString();

    try {
      const response = await fetch(`${config.API_BASE_URL}/quote.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formEncoded,
      });

      if (response.ok) {
        const result = await response.text();
        console.log('Success:', result);
        setIsSuccess(true);
        setFormData(initialFormData);
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
      } else {
        console.error('Failed to submit form:', response.status);
        alert('Oops! Something went wrong. Please try again.');
        recaptchaRef.current?.reset();
        setCaptchaToken(null);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please try again later.');
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (value.trim() !== '' && validationErrors[field as keyof typeof validationErrors]) {
      setValidationErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  if (!isVisible) return null;

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto text-center">
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <svg
            style={{
              left: '50%',
              top: '50%',
              position: 'absolute',
              transform: 'translate(-50%, -50%) matrix(1, 0, 0, 1, 0, 0)',
            }}
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 187.3 93.7"
            height="150px"
            width="200px"
          >
            <path
              d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
              strokeMiterlimit="10"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="4"
              fill="none"
              id="outline"
              stroke="#009999"
            />
            <path
              d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
              strokeMiterlimit="10"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="4"
              stroke="#009999"
              fill="none"
              opacity="0.05"
              id="outline-bg"
            />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      {...(isSuccess ? { 'aria-label': 'Free quote request sent' } : { 'aria-labelledby': 'quote-title' })}
      data-modal-root
      className={`fixed inset-0 z-50 flex items-center justify-center modal-overlay duration-500 ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`relative modal-container w-full max-w-4xl mx-4 transition-[transform,scale,opacity] duration-300 ${isAnimating ? ' opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
      >
        {children}

        {isSubmitting && (
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <svg
              style={{
                left: '50%',
                top: '50%',
                position: 'absolute',
                transform: 'translate(-50%, -50%) matrix(1, 0, 0, 1, 0, 0)',
              }}
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 187.3 93.7"
              height="150px"
              width="200px"
            >
              <path
                d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
                strokeMiterlimit="10"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="4"
                fill="none"
                id="outline"
                stroke="#009999"
              />
              <path
                d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
                strokeMiterlimit="10"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="4"
                stroke="#009999"
                fill="none"
                opacity="0.05"
                id="outline-bg"
              />
            </svg>
          </div>
        )}

        <div className="w-full md:rounded-[10px] shadow-xl overflow-hidden">
          <div className="md:p-[30px]">
            <div className="flex flex-col md:flex-row gap-[18px]">
              {/* Left side - Image and details */}
              <div className="lg:w-[60%] md:w-[50%] md:flex md:flex-col hidden">
                <div className="mb-[53px]">
                  <Image
                    src={ContactUs}
                    alt="Get your business online today with Bitpastel: a team celebrating in an office"
                    className="w-full h-auto object-cover "
                  />
                </div>
                <div className="mt-auto">
                  <h2 className="text-[32px] text-center md:mb-[20px] font-[600] leading-[36px] tracking-[-1px] mb-6 text-title font-source">
                    Satisfied Client Worldwide
                  </h2>

                  <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-[10px] ">
                    <div className="text-center md:bg-[#FCFFF9] px-[16px] py-[16px] rounded-[10px] border-[0.47px] border-[#0D9EBF4D]">
                      <Image
                        src="/images/modal-stat-clients.svg"
                        alt=""
                        width={30}
                        height={30}
                        className="mx-auto mb-[15px] h-[30px]"
                      />
                      <p className="text-[20px] text-[#222B32] font-roboto font-bold leading-[16px]">900</p>
                      <p className="text-[16px] font-[400] text-[#222B32] font-roboto leading-[22px]">Clients</p>
                    </div>

                    <div className="text-center md:bg-[#FCFFF9] px-[16px] py-[16px] rounded-[10px] border-[0.47px] border-[#B48D0E4D]">
                      <Image
                        src="/images/modal-stat-projects.svg"
                        alt=""
                        width={30}
                        height={30}
                        className="mx-auto mb-[15px] h-[30px]"
                      />
                      <p className="text-[20px] text-[#222B32] font-roboto font-bold leading-[16px]">1400+</p>
                      <p className="text-[16px] font-[400] text-[#222B32] font-roboto leading-[22px]">Projects</p>
                    </div>

                    <div className="text-center md:bg-[#FCFFF9] px-[16px] py-[16px] rounded-[10px] border-[0.47px] border-[#F245534D]">
                      <Image
                        src="/images/modal-stat-code.svg"
                        alt=""
                        width={30}
                        height={30}
                        className="mx-auto mb-[15px] h-[30px]"
                      />
                      <p className="text-[20px] text-[#222B32] font-roboto font-bold leading-[16px]">50M</p>
                      <p className="text-[16px] font-[400] text-[#222B32] font-roboto leading-[22px]">Lines of Code</p>
                    </div>

                    <div className="text-center md:bg-[#FCFFF9] px-[16px] py-[16px] rounded-[10px] border-[0.47px] border-[#29996A4D]">
                      <Image
                        src="/images/modal-stat-countries.svg"
                        alt=""
                        width={30}
                        height={30}
                        className="mx-auto mb-[15px] h-[30px]"
                      />
                      <p className="text-[20px] text-[#222B32] font-roboto font-bold leading-[16px]">35</p>
                      <p className="text-[16px] font-[400] text-[#222B32] font-roboto leading-[22px]">Countries</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center lg:gap-0 gap-4 pt-6 text-center lg:mr-[-17px]">
                    <p className="text-[#123B42] text-[17px] tracking-[-1px] leading-[18px] font-[600] font-source border-right w-full lg:w-1/3 md:w-full lg:flex justify-center mb-2 lg:mb-0">
                      <a href="tel:+18724446679">
                        <span className="font-[700] pr-[3px]">
                        US: 
                        </span>
                         +1 (872) 444 6679</a>
                    </p>
                    <p className="text-[#123B42] text-[17px] tracking-[-1px] leading-[18px] font-[600] font-source border-right w-full md:w-full lg:w-1/3 flex justify-center mb-2 lg:mb-0">
                      {/* <a target='_blank' href="https://api.whatsapp.com/send/?phone=442081446579&text=Hey...+I+would+like+to+have+a+quick+chat+with+you.&type=phone_number&app_absent=0">UK: +44 2081 446579</a> */}
                      {/* <a target='_blank' href="https://api.whatsapp.com/send/?phone=447469539191&text=Hey...+I+would+like+to+have+a+quick+chat+with+you.&type=phone_number&app_absent=0">UK: +44 7469 539191</a> */}
                      <a href="tel:+447469539191">
                        <span className="font-[700] pr-[3px]">
                        UK: 
                        </span>
                        +44 7469 539191</a>
                    </p>

                    

                    <p className="text-[#123B42] text-[17px] tracking-[-1px] leading-[18px] font-[600] font-source w-full lg:w-1/3 md:w-full lg:flex justify-center">
                      <a href="tel:+919830566248">
                        <span className="font-[700] pr-[3px]">
                        IN: 
                        </span>
                         +91 9830 566 248</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* Right side - Form */}
              <div className="lg:w-[40%] md:w-[50%] w-full ">
                <div className="md:hidden">
                  <div className="bg-[#00855D] text-primary-white">
                    <h3 className="modal-title title md:p-4 p-2 ">
                      Get Your Business Online Today <br />
                      With <span className="font-bold text-primary-white">Bitpastel</span>
                    </h3>
                  </div>
                </div>

                {/* Form Section */}
                <div className="bg-[#FCFFF9] md:p-[23px] rounded-[10px] py-[9px] px-[24px] md:shadow-[0px_1px_11.3px_0px_#00000070] modalform-area-mob flex flex-col h-[100%]">
                  {isSuccess ? (
                    <>
                      <div className="grid grid-cols-1 min-h-[450px] place-items-center justify-between">
                        <div className="w-[100px] h-[100px] rounded-full bg-[#00A944] flex items-center justify-center">
                          <Check className="text-primary-white w-[60px] h-[60px]" strokeWidth={3} />
                        </div>

                        <div className=" text-center text-dark">
                          <p className=" font-[100] paragraph font-roboto">
                            Thanks, you're all set
                          </p>

                          <p className="font-[100] paragraph font-roboto">
                            We have received your request and we will get back to you soon
                          </p>
                        </div>
                        <div className="flex flex-col items-start space-y-2">
                          <p className=" font-[100] text-dark paragraph font-roboto">
                            Please tap below to call us
                          </p>
                          <a
                            href="tel:+18724446679"
                            className="flex items-center gap-3 text-[#007A7A] text-[16px] hover:underline"
                          >
                            <Phone
                              className="w-[24px] h-[24px] text-[#007A7A] fill-current"
                              strokeWidth={0.5}
                            />
                            <div className="w-6 h-6 relative">
                              <Image
                                src="/flags/us.svg"
                                alt="United States"
                                width={26}
                                height={26}
                                className="object-contain"
                              />
                            </div>
                            <span>+1 (872) 444 6679</span>
                          </a>
                          <a
                            href="tel:+447469539191"
                            className="flex items-center gap-3 text-[#007A7A] text-[16px] hover:underline"
                          >
                            <Phone
                              className="w-[24px] h-[24px] text-[#007A7A] fill-current"
                              strokeWidth={0.5}
                            />
                            <div className="w-6 h-6 relative">
                              <Image
                                src="/flags/uk.svg"
                                alt="United Kingdom"
                                width={26}
                                height={26}
                                className="object-contain"
                              />
                            </div>
                            <span>+44 7469 539191</span>
                          </a>
                          <a
                            href="tel:+919830566248"
                            className="flex items-center gap-3 text-[#007A7A] text-[16px] hover:underline"
                          >
                            <Phone
                              className="w-[24px] h-[24px] text-[#007A7A] fill-current"
                              strokeWidth={0.5}
                            />
                            <div className="w-6 h-6 relative">
                              <Image
                                src="/flags/in.svg"
                                alt="India"
                                width={26}
                                height={26}
                                className="object-contain"
                              />
                            </div>
                            <span>+91 9830 566 248</span>
                          </a>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <h2 className="text-center text-[36px] font-source leading-[37px] tracking-[-1%] md:mb-4 mb-3 font-[400] text-[#123B42] " id="quote-title">
                        Get a Free Quote
                      </h2>
                      <form
                        noValidate
                        onSubmit={handleSubmit}
                        className="flex flex-col h-full"
                      >
                        <div className="h-full">
                          <div className="relative md:py-1 border-b border-gray-200">
                            <button
                              ref={serviceTriggerRef}
                              type="button"
                              aria-haspopup="listbox"
                              aria-expanded={isServiceDropdownOpen}
                              aria-controls="quote-service-list"
                              aria-labelledby="quote-service-label quote-service-value"
                              aria-invalid={validationErrors.service || undefined}
                              aria-describedby={validationErrors.service ? 'quote-service-error' : undefined}
                              onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                              onKeyDown={handleServiceTriggerKeyDown}
                              className={`w-full flex items-center focus:outline-none py-2 px-0 h-auto justify-start ${validationErrors.service ? 'text-red-500' : ''
                                }`}
                            >
                              <span id="quote-service-label" className="text-[#123B42] tex-[16px] font-[400] tracking-[-3%] leading-[28px]">I want<span className="sr-only"> (required)</span></span>
                              <span
                                id="quote-service-value"
                                className={`ml-12 text-[16px] tracking-[-3%] leading-[28px] ${formData.service ? 'font-[400]' : 'font-[100]'} ${validationErrors.service
                                  ? 'text-red-500'
                                  : formData.service
                                    ? 'text-[#212529]'
                                    : 'text-[#6B7280]'
                                  }`}
                              >
                                {formData.service || 'select*'}
                              </span>
                              <ChevronDown
                                className={`ml-auto mr-[20px] w-4 h-4 text-[#212529] transition-transform ${isServiceDropdownOpen ? 'rotate-180' : ''
                                  }`}
                              />
                            </button>

                            {isServiceDropdownOpen && (
                              <div
                                id="quote-service-list"
                                role="listbox"
                                aria-labelledby="quote-service-label"
                                onKeyDown={handleServiceListKeyDown}
                                className="absolute top-full left-0 right-0 mt-1 bg-[#FCFFF9] border border-gray-200 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto"
                              >
                                {services.map((service, i) => (
                                  <div
                                    key={service}
                                    ref={(el) => { serviceOptionRefs.current[i] = el; }}
                                    role="option"
                                    aria-selected={formData.service === service}
                                    tabIndex={-1}
                                    onClick={() => selectService(service)}
                                    className="w-full p-3 text-left hover:bg-gray-50 transition-colors justify-start cursor-pointer"
                                  >
                                    {service}
                                  </div>
                                ))}
                              </div>
                            )}

                            {validationErrors.service && (
                              <p id="quote-service-error" role="alert" className="text-xs text-[#B42318] mt-1 absolute right-0 z-10">
                                Choose what you need a quote for.
                              </p>
                            )}
                          </div>

                          <div className="md:py-1 border-b border-gray-200 relative">
                            <input
                              ref={fullNameRef}
                              id="quote-name"
                              name="fullName"
                              autoComplete="name"
                              required
                              aria-required="true"
                              aria-invalid={validationErrors.fullName || undefined}
                              aria-describedby={validationErrors.fullName ? 'quote-name-error' : undefined}
                              // onFocus={(e) => e.target.removeAttribute('readOnly')}
                              type="text"
                              placeholder="Full Name"
                              value={formData.fullName}
                              onChange={(e) => handleInputChange('fullName', e.target.value)}
                              className={`w-full focus:outline-none text-[16px] font-[400] py-2 leading-[28px] ${validationErrors.fullName ? 'placeholder-red-500' : ''}`}
                            />

                            {validationErrors.fullName && (
                              <p id="quote-name-error" role="alert" className="text-xs text-[#B42318] mt-1 absolute right-0 z-10">
                                Enter your full name.
                              </p>
                            )}
                          </div>

                          <div className="md:py-1 border-b border-gray-200 relative">
                            <input
                              ref={emailRef}
                              id="quote-email"
                              name="email"
                              autoComplete="email"
                              required
                              aria-required="true"
                              aria-invalid={validationErrors.email || undefined}
                              aria-describedby={validationErrors.email ? 'quote-email-error' : undefined}
                              onBlur={() => {
                                // Tell the user straight away when the address is malformed
                                if (formData.email && !isValidEmail(formData.email)) {
                                  setValidationErrors((prev) => ({ ...prev, email: true }));
                                }
                              }}
                              // readOnly
                              // onFocus={(e) => e.target.removeAttribute('readOnly')}
                              type="email"
                              placeholder="Email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className={`w-full focus:outline-none font-[400] py-2 leading-[28px] ${validationErrors.email ? 'placeholder-red-500' : ''}`}
                            />
                            {validationErrors.email && (
                              <p id="quote-email-error" role="alert" className="text-xs text-[#B42318] mt-1 absolute right-0 z-10">
                                {formData.email
                                  ? 'Enter an email address like name@company.com.'
                                  : 'Enter your email address.'}
                              </p>
                            )}
                          </div>

                          <div className={`relative flex items-center gap-2 md:py-1 border-b `}>
                            <PhoneInput
                              international
                              defaultCountry={defaultCountry as any}
                              countryCallingCodeEditable={false}
                              value={formData.phone}
                              onChange={(value) => handleInputChange('phone', value || '')}
                              placeholder="Mobile number (optional)"
                              autoComplete="tel"
                              id="quote-phone"
                              name="phone"
                              aria-label="Mobile number (optional)"
                              onKeyDown={(e: React.KeyboardEvent) => {
                                const digitsOnly = formData.phone.replace(/\D/g, '');
                                const allowedKeys = [
                                  'Backspace',
                                  'Delete',
                                  'ArrowLeft',
                                  'ArrowRight',
                                  'Tab',
                                ];
                                if (
                                  digitsOnly.length >= 15 &&
                                  !allowedKeys.includes(e.key) &&
                                  /^\d$/.test(e.key)
                                ) {
                                  e.preventDefault();
                                }
                              }}
                              className="!border-none gap-[20px] font-[400] w-full !p-0 [&>input]:!text-title [&>input]:!text-[16px] [&>input]:!font-roboto [&>input]:!font-[400] [&>input]:focus:!outline-none [&>input]:!py-2 [&>input]:!leading-[28px] [&>input]:!flex-1 [&>input]:placeholder-[#2A2A2A]"
                            />
                            {!formData.phone && (
                              <p aria-hidden="true" className="!text-[#6B7280] z-10 top-[14px] left-[115px] whitespace-nowrap font-[100] pointer-events-none absolute right-0">
                                Mobile number (optional)
                              </p>
                            )}
                          </div>

                          <div className="md:pt-[6px]">
                            <textarea
                              id="quote-message"
                              name="message"
                              aria-label="Message (optional)"
                              // readOnly
                              // onFocus={(e) => e.target.removeAttribute('readOnly')}
                              placeholder="Message (optional)"
                              value={formData.message}
                              onChange={(e) => handleInputChange('message', e.target.value)}
                              rows={2}
                              className="w-full focus:outline-none font-[400] resize-none md:max-h-[100%] pt-[8px] md:pt-[none] md:py-2 "
                            />
                          </div>
                        </div>

                        <div className="border-t border-[#E1E1E1] pt-4">
                          {/* ReCAPTCHA */}
                          {formData.service && formData.fullName && formData.email && (
                            <div className="mb-3">
                              <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey="6LdSzGEUAAAAABG0EhsRTOkyJUyTqwFz6gpNX8g1"
                                onChange={(token) => {
                                  setCaptchaToken(token);
                                  if (token) setCaptchaError(false);
                                }}
                                onExpired={() => setCaptchaToken(null)}
                                size="normal"
                              />
                              {captchaError && (
                                <p role="alert" className="text-xs text-[#B42318] mt-1">
                                  Please confirm you are not a robot.
                                </p>
                              )}
                            </div>
                          )}
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`h-[40px] rounded-[50px] flex items-center justify-center font-roboto font-[500] tracking-[-3%] leading-[28px] gap-[10px] bg-[#00855D] text-[16px] text-[#ffffff] mb-center`}
                            style={{width: '100%'}}
                          >
                            Let&apos;s Work Together
                          </button>

                          <p className="text-[12px] mt-[5px] font-roboto font-[400] tracking-[-3%] text-[#4B5563] text-center">
                            By clicking &quot;Let&apos;s Work Together&quot;, you agree to our{' '}
                            <Link href="/privacy-policy" target="_blank" className="text-[#00855D] font-[500] underline underline-offset-2">
                              Privacy Policy
                            </Link>
                          </p>

                          <Link
                            target="_blank"
                            href={
                              "https://api.whatsapp.com/send/?phone=919830566248&text=Hey...+I+would+like+to+have+a+quick+chat+with+you.&type=phone_number&app_absent=0"
                            }

                            type="button"
                            className="w-full text-[#00855D] flex justify-center items-center mt-5 border-[1px] h-[40px] rounded-[100px] border-[#00855D] hover:bg-[#00855D] hover:text-primary-white transition-all duration-300 border-radius-[100px]"
                          >
                            Chat with Us
                          </Link>
                        </div>
                      </form>
                    </>
                  )}
                </div>
                <div className={`flex flex-wrap md:gap-4 gap-2 flex-col justify-center md:pt-6 pt-0 pb-2 md:pb-5 text-center md:hidden ${isSuccess ? 'hidden' : ''}`}>
                  <p className="text-[#007A7A] text-[14px] w-full md:w-full lg:w-1/3 flex justify-center mb-2 lg:mb-0">
                    {/* <a target='_blank' href="https://api.whatsapp.com/send/?phone=442081446579&text=Hey...+I+would+like+to+have+a+quick+chat+with+you.&type=phone_number&app_absent=0">UK: +44 2081 446579</a> */}
                    {/* <a target='_blank' href="https://api.whatsapp.com/send/?phone=447469539191&text=Hey...+I+would+like+to+have+a+quick+chat+with+you.&type=phone_number&app_absent=0">UK: +44 7469 539191</a> */}
                    <a href="tel:+18724446679">US: +1 (872) 444 6679</a>
                  </p>

                  <p className="text-[#007A7A]  text-[14px] w-full lg:w-1/3 md:w-full lg:flex justify-center mb-2 lg:mb-0">
                    <a href="tel:+447469539191">UK: +44 7469 539191</a>
                  </p>

                  <p className="text-[#007A7A] text-[14px] w-full lg:w-1/3 md:w-full lg:flex justify-center">
                    <a href="tel:+919830566248">IN: +91 9830 566 248</a>
                  </p>
                </div>
              </div>
              <div className="md-hidden absolute top-[10px] right-[10px]">
                <button type="button" aria-label="Close modal" onClick={handleClose}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M8.9935 11.1295L2.56029 17.5714C2.27437 17.8571 1.91697 18 1.48809 18C1.05921 18 0.701805 17.8571 0.415884 17.5714C0.129964 17.2857 -0.00852888 16.9286 0.000406137 16.5C0.00934116 16.0714 0.147834 15.7143 0.415884 15.4286L6.8491 9L0.415884 2.57143C0.138899 2.28571 0.000406137 1.92857 0.000406137 1.5C0.000406137 1.07143 0.138899 0.714285 0.415884 0.428571C0.69287 0.142857 1.05027 0.00446395 1.48809 0.0133925C1.9259 0.0223211 2.2833 0.160714 2.56029 0.428571L8.9935 6.85714L15.4267 0.428571C15.7126 0.142857 16.07 0 16.4989 0C16.9278 0 17.2852 0.142857 17.5711 0.428571C17.857 0.714285 18 1.07143 18 1.5C18 1.92857 17.857 2.28571 17.5711 2.57143L11.1245 9L17.5577 15.4286C17.8436 15.7143 17.9866 16.0714 17.9866 16.5C17.9866 16.9286 17.8481 17.2857 17.5711 17.5714C17.2941 17.8571 16.9367 18 16.4989 18C16.0611 18 15.7037 17.8571 15.4267 17.5714L8.9935 11.1295Z" fill="#123B42"/>
</svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFF"
                    width="20px"
                    height="20px"
                    viewBox="-3.5 0 19 19"
                    className="cf-icon-svg block md:hidden"
                  >
                    <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;