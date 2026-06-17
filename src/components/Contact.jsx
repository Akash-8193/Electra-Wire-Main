import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        product_interest: '',
        application_type: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [submittedData, setSubmittedData] = useState(null);

    const toggleFaq = (index) => { setOpenFaq((current) => (current === index ? null : index)); };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRadioChange = (e) => {
        setFormData(prev => ({ ...prev, application_type: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        try {
            const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/Contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
                    'Prefer': 'return=minimal'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error("Supabase Error:", errorData);
                throw new Error(errorData.message || 'Failed to submit form');
            }

            setSubmitStatus({ type: 'success', text: 'Thank you! Your inquiry has been submitted successfully.' });
            setSubmittedData({ ...formData });
            setFormData({
                name: '', email: '', phone: '', product_interest: '', application_type: '', message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus({ type: 'error', text: 'Sorry, there was an error submitting your form: ' + error.message });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main>
            <div className="w-full" id="hero-section">
                <section className="w-full grid min-h-screen supports-[min-height:100cqh]:min-h-[100cqh] relative" style={{marginTop: 'calc(-1 * 120px)'}}>
                    <div className="relative min-h-screen" style={{paddingTop: '120px', minHeight: 'calc(100vh + 120px)'}}>
                        <div className="h-full w-full overflow-hidden absolute inset-0 z-0">
                            <img alt="Electra Wires manufacturing facility in New Delhi" fetchPriority="high" loading="eager" decoding="async" data-nimg="fill" className="absolute inset-0" style={{position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'cover', objectPosition: '50% 50%', color: 'transparent', transformOrigin: '50% 50%', transform: 'scale(1)'}} sizes="100vw" src="/_next/d97dc04f-2405-4f5d-bbdf-67e692615566-CkiDWJAk4KRWP18byAdwNiZjhw2sm14e44.png"/>
                        </div>
                        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
                            <video style={{display: 'block', width: '100%', height: '100%', objectFit: 'cover'}} className="absolute inset-0 h-full w-full transition-opacity duration-500 " src="https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-videos/e113f788-9dcb-43bb-9c71-2f9423184db4-oTFRUR3bcYK5zaKWaW1c8HNMLWYruK.mp4" autoPlay muted loop playsInline></video>
                        </div>
                        <div className="absolute inset-0 z-10">
                            <div className="absolute inset-0" style={{borderRadius: 'inherit', background: '#0F0F0079'}}></div>
                        </div>
                        <div className="mx-auto max-w-[1536px] px-6 relative flex h-full flex-1 items-end py-16 @tablet:py-24" style={{zIndex: '20'}}>
                            <div className="flex w-full flex-col gap-8 @desktop:flex-row @desktop:items-end @desktop:justify-between">
                                <div className="flex flex-col gap-8 @desktop:gap-4">
                                    <div className="flex max-w-2xl flex-col gap-4">
                                        <h1 className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{'--typography-font-size': 'var(--typography-display-md-font-size)', '--typography-font-weight': 'var(--typography-display-md-font-weight)', '--typography-line-height': 'var(--typography-display-md-line-height)', '--typography-letter-spacing': 'var(--typography-display-md-letter-spacing)', '--typography-font-family': 'var(--typography-display-md-font-family)', color: '#E8A317'}}>
                                            Get in Touch for Reliable Electrical Wire Solutions
                                        </h1>
                                    </div>
                                    <div className="@desktop:hidden">
                                        <div className="grid grid-cols-1 gap-4 @tablet:flex @tablet:flex-row items-start @tablet:justify-start">
                                            <Link data-slot="button" label="Talk to Our Experts" style={{ '--bg-color': '#c62828', '--hover-bg-color': '#a00000', color: '#fff' }} className="btn-text-white inline-flex shrink-0 cursor-pointer items-center justify-center bg-(--bg-color) whitespace-nowrap transition-all outline-none hover:bg-(--hover-bg-color) focus-visible:border-primary-border focus-visible:ring-[3px] focus-visible:ring-primary-interactive-bg disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-error-border aria-invalid:ring-error-interactive-bg [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])] :size-4 border border-black hover:border-black gap-2 px-5 py-2.5 has-[>svg:first-child]:pr-4 has-[>svg:last-child]:pl-4 has-[>svg:only-child]:px-2.5 rounded-3xl" to="#contact-info">
                                                <span className="min-w-0 overflow-hidden text-ellipsis [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-sm-em-font-size)', '--typography-font-weight': 'var(--typography-body-sm-em-font-weight)', '--typography-line-height': 'var(--typography-body-sm-em-line-height)', '--typography-letter-spacing': 'var(--typography-body-sm-em-letter-spacing)', '--typography-font-family': 'var(--typography-body-sm-em-font-family)', color: '#fff' }}>Talk to Our Experts</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden @desktop:block">
                                    <div className="grid grid-cols-1 gap-4 @tablet:flex @tablet:flex-row items-start @tablet:justify-start">
                                        <Link data-slot="button" label="Talk to Our Experts" style={{ '--bg-color': '#c62828', '--hover-bg-color': '#a00000', color: '#fff' }} className="btn-text-white inline-flex shrink-0 cursor-pointer items-center justify-center bg-(--bg-color) whitespace-nowrap transition-all outline-none hover:bg-(--hover-bg-color) focus-visible:border-primary-border focus-visible:ring-[3px] focus-visible:ring-primary-interactive-bg disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-error-border aria-invalid:ring-error-interactive-bg [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])] :size-4 border border-black hover:border-black gap-2 px-5 py-2.5 has-[>svg:first-child]:pr-4 has-[>svg:last-child]:pl-4 has-[>svg:only-child]:px-2.5 rounded-3xl" to="#contact-info">
                                            <span className="min-w-0 overflow-hidden text-ellipsis [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-sm-em-font-size)', '--typography-font-weight': 'var(--typography-body-sm-em-font-weight)', '--typography-line-height': 'var(--typography-body-sm-em-line-height)', '--typography-letter-spacing': 'var(--typography-body-sm-em-letter-spacing)', '--typography-font-family': 'var(--typography-body-sm-em-font-family)', color: '#fff' }}>Talk to Our Experts</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="w-full" id="contact-info">
                <section className="w-full" style={{contain: 'layout style paint'}}>
                    <div className="relative">
                        <div className="absolute inset-0" style={{borderRadius: 'inherit', background: '#FFF8E4'}}></div>
                        <div className="relative mx-auto max-w-[1536px] px-6 flex w-full flex-col gap-4 py-16 @tablet:py-24 @tablet:gap-6 items-start text-left" style={{zIndex: '10'}}>
                            <div className="flex items-baseline gap-1">
                                <div className="flex items-center">
                                    <div className="h-0 w-4 border-t" style={{borderColor: '#1b1b16'}}></div>
                                </div>
                                <span className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{'--typography-font-size': 'var(--typography-label-md-font-size)', '--typography-font-weight': 'var(--typography-label-md-font-weight)', '--typography-line-height': 'var(--typography-label-md-line-height)', '--typography-letter-spacing': 'var(--typography-label-md-letter-spacing)', '--typography-font-family': 'var(--typography-label-md-font-family)', color: '#1b1b16'}}>Contact Electra Wires</span>
                            </div>
                            <div className="flex w-full flex-col gap-4 @tablet:gap-8 @desktop:flex-row items-start">
                                <h2 className="w-full @tablet:max-w-120 @desktop:basis-1/2 [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{'--typography-font-size': 'var(--typography-display-sm-font-size)', '--typography-font-weight': 'var(--typography-display-sm-font-weight)', '--typography-line-height': 'var(--typography-display-sm-line-height)', '--typography-letter-spacing': 'var(--typography-display-sm-letter-spacing)', '--typography-font-family': 'var(--typography-display-sm-font-family)', color: '#060603'}}>Visit Our Office in New Delhi for Expert Support</h2>
                                <p className="whitespace-pre-line w-full @tablet:max-w-2xl text-left @desktop:basis-1/2 [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{'--typography-font-size': 'var(--typography-body-md-font-size)', '--typography-font-weight': 'var(--typography-body-md-font-weight)', '--typography-line-height': 'var(--typography-body-md-line-height)', '--typography-letter-spacing': 'var(--typography-body-md-letter-spacing)', '--typography-font-family': 'var(--typography-body-md-font-family)', color: '#1b1b16'}}>Connect with Electra Wires for trusted electrical wires, FR cables, and industrial solutions. Our team is ready to guide you with the best products for your requirements.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="w-full" id="contact-form">
                <section className="w-full" style={{contain: 'layout style paint'}}>
                    <div className="relative">
                        <div className="absolute inset-0" style={{borderRadius: 'inherit', background: '#FFF8E4'}}></div>
                        <div className="relative mx-auto max-w-[1536px] px-6 flex flex-col gap-16 py-16 @tablet:py-24 @desktop:flex-row" style={{zIndex: '10'}}>
                            <div className="flex w-full flex-col justify-center @desktop:basis-1/2 order-1 @desktop:order-1">
                                <div className="flex w-full flex-col gap-8">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-baseline gap-1">
                                            <div className="flex items-center">
                                                <div className="h-0 w-4 border-t" style={{borderColor: '#1b1b16'}}></div>
                                            </div>
                                            <span className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{'--typography-font-size': 'var(--typography-label-md-font-size)', '--typography-font-weight': 'var(--typography-label-md-font-weight)', '--typography-line-height': 'var(--typography-label-md-line-height)', '--typography-letter-spacing': 'var(--typography-label-md-letter-spacing)', '--typography-font-family': 'var(--typography-label-md-font-family)', color: '#1b1b16'}}>Contact Electra Wires</span>
                                        </div>
                                        <h2 className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{'--typography-font-size': 'var(--typography-display-sm-font-size)', '--typography-font-weight': 'var(--typography-display-sm-font-weight)', '--typography-line-height': 'var(--typography-display-sm-line-height)', '--typography-letter-spacing': 'var(--typography-display-sm-letter-spacing)', '--typography-font-family': 'var(--typography-display-sm-font-family)', color: '#060603'}}>Request a Quote or Product Information</h2>
                                        <p className="whitespace-pre-line [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{'--typography-font-size': 'var(--typography-body-md-font-size)', '--typography-font-weight': 'var(--typography-body-md-font-weight)', '--typography-line-height': 'var(--typography-body-md-line-height)', '--typography-letter-spacing': 'var(--typography-body-md-letter-spacing)', '--typography-font-family': 'var(--typography-body-md-font-family)', color: '#1b1b16'}}>Fill out the form below to get expert assistance on electrical wires, pricing, and customized solutions tailored to your project.</p>
                                    </div>
                                    <form onSubmit={handleSubmit} className="space-y-4 w-full">
                                        {submitStatus && submitStatus.type === 'error' && (
                                            <div className="p-4 rounded-xl text-sm font-medium bg-red-50 text-red-800 border border-red-200">
                                                {submitStatus.text}
                                            </div>
                                        )}
                                        
                                        {submitStatus && submitStatus.type === 'success' && submittedData ? (
                                            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-green-200 shadow-lg text-center w-full">
                                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                                                <p className="text-gray-600 mb-6">Thank you for contacting Electra Wires. Our team will get back to you shortly.</p>
                                                
                                                <div className="text-left bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-4">
                                                    <h4 className="font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Your Submitted Details:</h4>
                                                    <div className="space-y-3 text-sm text-gray-700">
                                                        <p><strong className="text-gray-900 inline-block w-24">Name:</strong> {submittedData.name}</p>
                                                        <p><strong className="text-gray-900 inline-block w-24">Email:</strong> {submittedData.email}</p>
                                                        {submittedData.phone && <p><strong className="text-gray-900 inline-block w-24">Phone:</strong> {submittedData.phone}</p>}
                                                        {submittedData.product_interest && <p><strong className="text-gray-900 inline-block w-24">Product:</strong> {submittedData.product_interest}</p>}
                                                        {submittedData.application_type && <p><strong className="text-gray-900 inline-block w-24">Application:</strong> {submittedData.application_type}</p>}
                                                        {submittedData.message && (
                                                            <div className="mt-4 pt-4 border-t border-gray-200">
                                                                <strong className="text-gray-900 block mb-2">Message:</strong>
                                                                <p className="whitespace-pre-line bg-white p-3 rounded-lg border border-gray-100">{submittedData.message}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                
                                                <button 
                                                    onClick={() => { setSubmitStatus(null); setSubmittedData(null); }}
                                                    type="button" 
                                                    className="mt-8 px-6 py-3 bg-[#c62828] text-white font-bold rounded-full hover:bg-[#a00000] transition-colors"
                                                >
                                                    Send Another Message
                                                </button>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="flex flex-col gap-1">
                                                    <label className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{'--typography-font-size': 'var(--typography-label-sm-font-size)', '--typography-font-weight': 'var(--typography-label-sm-font-weight)', '--typography-line-height': 'var(--typography-label-sm-line-height)', '--typography-letter-spacing': 'var(--typography-label-sm-letter-spacing)', '--typography-font-family': 'var(--typography-label-sm-font-family)', color: '#1b1b16'}} htmlFor="_R_2d9l4lviv9fivb_-name">Full Name</label>
                                                    <input data-slot="input" type="text" id="_R_2d9l4lviv9fivb_-name" maxLength="200" required="" value={formData.name} onChange={handleChange} style={{'--bg-color': 'transparent', '--hover-bg-color': '#efe8d6', '--border-color': '#4b4b46', '--hover-border-color': '#4b4b46', color: '#1b1b16', borderColor: '#4b4b46'}} className="flex w-full border border-(--border-color) bg-(--bg-color) [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing) transition-all placeholder:opacity-50 hover:border-(--hover-border-color) hover:bg-(--hover-bg-color) focus-visible:bg-(--hover-bg-color) focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-error-border aria-invalid:ring-error-interactive-bg px-5 py-3 rounded-3xl" name="name"/>
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <label className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{'--typography-font-size': 'var(--typography-label-sm-font-size)', '--typography-font-weight': 'var(--typography-label-sm-font-weight)', '--typography-line-height': 'var(--typography-label-sm-line-height)', '--typography-letter-spacing': 'var(--typography-label-sm-letter-spacing)', '--typography-font-family': 'var(--typography-label-sm-font-family)', color: '#1b1b16'}} htmlFor="_R_2d9l4lviv9fivb_-email">Email Address</label>
                                                    <input data-slot="input" type="email" id="_R_2d9l4lviv9fivb_-email" maxLength="320" required="" value={formData.email} onChange={handleChange} style={{'--bg-color': 'transparent', '--hover-bg-color': '#efe8d6', '--border-color': '#4b4b46', '--hover-border-color': '#4b4b46', color: '#1b1b16', borderColor: '#4b4b46'}} className="flex w-full border border-(--border-color) bg-(--bg-color) [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing) transition-all placeholder:opacity-50 hover:border-(--hover-border-color) hover:bg-(--hover-bg-color) focus-visible:bg-(--hover-bg-color) focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-error-border aria-invalid:ring-error-interactive-bg px-5 py-3 rounded-3xl" name="email"/>
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <label className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{'--typography-font-size': 'var(--typography-label-sm-font-size)', '--typography-font-weight': 'var(--typography-label-sm-font-weight)', '--typography-line-height': 'var(--typography-label-sm-line-height)', '--typography-letter-spacing': 'var(--typography-label-sm-letter-spacing)', '--typography-font-family': 'var(--typography-label-sm-font-family)', color: '#1b1b16'}} htmlFor="_R_2d9l4lviv9fivb_-phone">Contact Number</label>
                                                    <input data-slot="input" type="text" id="_R_2d9l4lviv9fivb_-phone" maxLength="20" value={formData.phone} onChange={handleChange} style={{'--bg-color': 'transparent', '--hover-bg-color': '#efe8d6', '--border-color': '#4b4b46', '--hover-border-color': '#4b4b46', color: '#1b1b16', borderColor: '#4b4b46'}} className="flex w-full border border-(--border-color) bg-(--bg-color) [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing) transition-all placeholder:opacity-50 hover:border-(--hover-border-color) hover:bg-(--hover-bg-color) focus-visible:bg-(--hover-bg-color) focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-error-border aria-invalid:ring-error-interactive-bg px-5 py-3 rounded-3xl" name="phone"/>
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <label className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{'--typography-font-size': 'var(--typography-label-sm-font-size)', '--typography-font-weight': 'var(--typography-label-sm-font-weight)', '--typography-line-height': 'var(--typography-label-sm-line-height)', '--typography-letter-spacing': 'var(--typography-label-sm-letter-spacing)', '--typography-font-family': 'var(--typography-label-sm-font-family)', color: '#1b1b16'}} htmlFor="_R_2d9l4lviv9fivb_-product-interest">Select Product Type</label>
                                                    <select id="_R_2d9l4lviv9fivb_-product-interest" name="product_interest" value={formData.product_interest} onChange={handleChange} style={{'--bg-color': 'transparent', '--hover-bg-color': '#efe8d6', '--border-color': '#4b4b46', '--hover-border-color': '#4b4b46', color: '#1b1b16', borderColor: '#4b4b46'}} className="flex w-full items-center justify-between gap-2 border border-(--border-color) bg-(--bg-color) [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing) transition-all hover:border-(--hover-border-color) hover:bg-(--hover-bg-color) focus-visible:bg-(--hover-bg-color) focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-error-border aria-invalid:ring-error-interactive-bg px-5 py-3 rounded-3xl cursor-pointer">
                                                        <option value="">Product Interest</option>
                                                        <option value="House Wires">House Wires</option>
                                                        <option value="Industrial Cables">Industrial Cables</option>
                                                        <option value="FR-LSH">FR-LSH</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <label className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{'--typography-font-size': 'var(--typography-label-sm-font-size)', '--typography-font-weight': 'var(--typography-label-sm-font-weight)', '--typography-line-height': 'var(--typography-label-sm-line-height)', '--typography-letter-spacing': 'var(--typography-label-sm-letter-spacing)', '--typography-font-family': 'var(--typography-label-sm-font-family)', color: '#1b1b16'}} htmlFor="_R_2d9l4lviv9fivb_-application-type">Application Type</label>
                                                    <fieldset className="flex w-full flex-col gap-3 [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" id="_R_2d9l4lviv9fivb_-application-type">
                                                        <label style={{color: '#1b1b16'}} className="flex cursor-pointer items-center gap-3 w-full bg-white/40 hover:bg-white/60 transition-colors p-3 rounded-xl border border-black">
                                                            <input type="radio" className="w-5 h-5 cursor-pointer accent-[#E8A317]" name="application_type" value="Residential" checked={formData.application_type === 'Residential'} onChange={handleRadioChange}/>
                                                            <span className="w-full">Residential</span>
                                                        </label>
                                                        <label style={{color: '#1b1b16'}} className="flex cursor-pointer items-center gap-3 w-full bg-white/40 hover:bg-white/60 transition-colors p-3 rounded-xl border border-black">
                                                            <input type="radio" className="w-5 h-5 cursor-pointer accent-[#E8A317]" name="application_type" value="Commercial" checked={formData.application_type === 'Commercial'} onChange={handleRadioChange}/>
                                                            <span className="w-full">Commercial</span>
                                                        </label>
                                                        <label style={{color: '#1b1b16'}} className="flex cursor-pointer items-center gap-3 w-full bg-white/40 hover:bg-white/60 transition-colors p-3 rounded-xl border border-black">
                                                            <input type="radio" className="w-5 h-5 cursor-pointer accent-[#E8A317]" name="application_type" value="Industrial" checked={formData.application_type === 'Industrial'} onChange={handleRadioChange}/>
                                                            <span className="w-full">Industrial</span>
                                                        </label>
                                                    </fieldset>
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <label className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{'--typography-font-size': 'var(--typography-label-sm-font-size)', '--typography-font-weight': 'var(--typography-label-sm-font-weight)', '--typography-line-height': 'var(--typography-label-sm-line-height)', '--typography-letter-spacing': 'var(--typography-label-sm-letter-spacing)', '--typography-font-family': 'var(--typography-label-sm-font-family)', color: '#1b1b16'}} htmlFor="_R_2d9l4lviv9fivb_-message">Project Details / Requirements</label>
                                                    <textarea data-slot="textarea" id="_R_2d9l4lviv9fivb_-message" type="textarea" maxLength="5000" name="message" value={formData.message} onChange={handleChange} style={{'--bg-color': 'transparent', '--hover-bg-color': '#efe8d6', '--border-color': '#4b4b46', '--hover-border-color': '#4b4b46', color: '#1b1b16', borderColor: '#4b4b46'}} className="flex min-h-40 w-full resize-y border border-(--border-color) bg-(--bg-color) [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing) transition-all placeholder:opacity-50 hover:border-(--hover-border-color) hover:bg-(--hover-bg-color) focus-visible:bg-(--hover-bg-color) focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-error-border aria-invalid:ring-error-interactive-bg px-5 py-3 rounded-3xl"></textarea>
                                                </div>
                                                <button data-slot="button" disabled={isSubmitting} type="submit" label="Submit Inquiry" style={{ '--bg-color': '#c62828', '--hover-bg-color': '#a00000', color: '#fff' }} className="btn-text-white inline-flex shrink-0 cursor-pointer items-center justify-center bg-(--bg-color) whitespace-nowrap transition-all outline-none hover:bg-(--hover-bg-color) focus-visible:border-primary-border focus-visible:ring-[3px] focus-visible:ring-primary-interactive-bg disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-error-border aria-invalid:ring-error-interactive-bg border border-black hover:border-black gap-2 px-5 py-2.5 has-[>svg:first-child]:pr-4 has-[>svg:last-child]:pl-4 has-[>svg:only-child]:px-2.5 rounded-3xl w-full @tablet:w-auto">
                                                    <span className="min-w-0 overflow-hidden text-ellipsis [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-sm-em-font-size)', '--typography-font-weight': 'var(--typography-body-sm-em-font-weight)', '--typography-line-height': 'var(--typography-body-sm-em-line-height)', '--typography-letter-spacing': 'var(--typography-body-sm-em-letter-spacing)', '--typography-font-family': 'var(--typography-body-sm-em-font-family)', color: '#fff' }}>
                                                        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                                                    </span>
                                                </button>
                                            </>
                                        )}
                                    </form>
                                </div>
                            </div>
                            <div className="relative aspect-square w-full overflow-hidden @tablet:aspect-4/3 @desktop:aspect-auto @desktop:basis-1/2 @desktop:self-stretch order-2 @desktop:order-2">
                                <div className="relative rounded-3xl overflow-hidden h-full w-full object-cover">
                                    <img alt="Industrial close-up aesthetic shot of FR PVC electrical wires" fetchPriority="auto" loading="lazy" decoding="async" data-nimg="fill" className="h-full w-full object-cover" style={{position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'cover', objectPosition: '50% 50%', color: 'transparent', transformOrigin: '50% 50%'}} sizes="(max-width: 1024px) 100vw, 50vw" src="/_next/5ea20847-ef3e-4fc3-bdc6-005529a108a4-QAQNAK7eKDfYUPy4rqsWEO3UZPRJKi53b3.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="w-full" id="location-map">
                <section className="w-full" style={{contain: 'layout style paint'}}>
                    <div className="relative">
                        <div className="absolute inset-0" style={{borderRadius: 'inherit', background: '#FFF8E4'}}></div>
                        <div className="relative mx-auto max-w-none px-0 py-0" style={{zIndex: '10'}}>
                            <div className="relative" style={{width: '100%', aspectRatio: '21 / 9'}}>
                                <iframe src="https://maps.google.com/maps?q=%E0%A4%A8%E0%A4%8 नई%20%E0%A4%A6%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A5%80%2C%20%E0%A4%A6%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A5%80%2C%20%E0%A4%AD%E0%A4%BE%E0%A4%B0%E0%A4%A4&z=15&t=m&output=embed" title="Google Maps" className="h-full w-full border-0" style={{filter: 'grayscale(45%) contrast(1.06) brightness(0.98) saturate(0.9)'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen=""></iframe>
                                <div className="pointer-events-none absolute inset-0" style={{backgroundColor: '#E8A317', opacity: '0.21000000000000002', mixBlendMode: 'color'}}></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="w-full" id="faqs">
                <section className="w-full" style={{contain: 'layout style paint'}}>
                    <div className="relative" style={{paddingBottom: '488px'}}>
                        <div className="absolute inset-0" style={{borderRadius: 'inherit', background: 'transparent'}}></div>
                        <div className="relative mx-auto max-w-[1536px] px-6 flex flex-col gap-12 py-16 @tablet:py-24 @desktop:grid @desktop:grid-cols-2" style={{zIndex: '10'}}>
                            <div className="flex max-w-xl flex-col gap-4">
                                <div className="flex items-baseline gap-1">
                                    <div className="flex items-center">
                                        <div className="h-0 w-4 border-t" style={{borderColor: '#1b1b16'}}></div>
                                    </div>
                                    <span className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{'--typography-font-size': 'var(--typography-label-md-font-size)', '--typography-font-weight': 'var(--typography-label-md-font-weight)', '--typography-line-height': 'var(--typography-label-md-line-height)', '--typography-letter-spacing': 'var(--typography-label-md-letter-spacing)', '--typography-font-family': 'var(--typography-label-md-font-family)', color: '#1b1b16'}}>FAQ</span>
                                </div>
                                <h2 className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{'--typography-font-size': 'var(--typography-display-sm-font-size)', '--typography-font-weight': 'var(--typography-display-sm-font-weight)', '--typography-line-height': 'var(--typography-display-sm-line-height)', '--typography-letter-spacing': 'var(--typography-display-sm-letter-spacing)', '--typography-font-family': 'var(--typography-display-sm-font-family)', color: '#060603'}}>Frequently Asked Questions</h2>
                                <p className="whitespace-pre-line [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{'--typography-font-size': 'var(--typography-body-md-font-size)', '--typography-font-weight': 'var(--typography-body-md-font-weight)', '--typography-line-height': 'var(--typography-body-md-line-height)', '--typography-letter-spacing': 'var(--typography-body-md-letter-spacing)', '--typography-font-family': 'var(--typography-body-md-font-family)', color: '#1b1b16'}}>Find answers to common questions about our electrical wires, FR cables, and industrial solutions.</p>
                                <div className="mt-8 relative w-full overflow-hidden rounded-3xl shadow-xl">
                                    <img 
                                        src="/images/electrical_wires_3d.png" 
                                        alt="3D Industrial Electrical Wires" 
                                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 aspect-square @desktop:aspect-[4/3]" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                                    <div className="absolute bottom-6 left-6 right-6 text-white z-20">
                                        <h3 className="text-xl @tablet:text-2xl font-bold mb-1">Premium Quality Wires</h3>
                                        <p className="text-xs @tablet:text-sm opacity-90">Engineered for durability and safety.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full max-w-3xl" data-orientation="vertical">
                                {[
                                    {q: "How are Electra Wires' FR PVC wires safe?", a: "Our FR PVC electrical wires are designed with fire-retardant insulation that prevents flame spread, reduces smoke emission, and ensures maximum safety."},
                                    {q: 'Are your wires suitable for both residential and commercial applications?', a: "Yes, our electrical wires are engineered for residential, commercial, and industrial use, ensuring high performance and safety across all applications."},
                                    {q: 'In what conditions are Heavy Duty Wires used?', a: "Heavy-duty wires are ideal for industrial environments where high voltage, heavy loads, and harsh conditions require durable and reliable performance."},
                                    {q: 'How long have you been manufacturing wires in New Delhi?', a: "Electra Wires has over 20 years of experience in manufacturing high-quality electrical wires and cables in New Delhi."},
                                    {q: 'Do your products have quality certifications?', a: "Yes, all our wires undergo strict quality testing and meet industry safety standards to ensure reliability and durability."},
                                    {q: 'Where can I purchase your wires in New Delhi?', a: "You can purchase our wires through authorized dealers and distributors across New Delhi. Contact us to locate your nearest supplier."},
                                    {q: 'Do you offer customized wire solutions?', a: "Yes, we provide customized electrical wire solutions based on your project requirements and technical specifications."},
                                    {q: 'What is the best way to contact you?', a: "You can contact us via phone, email, or by submitting the contact form on this page. Our team will respond promptly."}
                                ].map((faq, index) => (
                                    <div key={index} data-state={openFaq === index ? "open" : "closed"} data-orientation="vertical">
                                        <div role="separator" aria-orientation="horizontal" className="w-full" style={{backgroundColor: '#777771', height: '1px'}}></div>
                                        <h3 data-orientation="vertical" data-state={openFaq === index ? "open" : "closed"}>
                                            <button type="button" onClick={() => toggleFaq(index)} aria-expanded={openFaq === index} data-state={openFaq === index ? "open" : "closed"} data-orientation="vertical" className="faq-button flex w-full cursor-pointer items-center gap-4 py-6 text-left transition-colors duration-200 focus:outline-none group">
                                                <span className="flex-1 [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{'--typography-font-size': 'var(--typography-body-md-em-font-size)', '--typography-font-weight': 'var(--typography-body-md-em-font-weight)', '--typography-line-height': 'var(--typography-body-md-em-line-height)', '--typography-letter-spacing': 'var(--typography-body-md-em-letter-spacing)', '--typography-font-family': 'var(--typography-body-md-em-font-family)', color: '#060603'}}>{faq.q}</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width="24" height="24" className={`transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} style={{color: '#321a00'}}><path fill="currentColor" fillRule="evenodd" d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414" clipRule="evenodd"></path></svg>
                                            </button>
                                        </h3>
                                        <div data-state={openFaq === index ? "open" : "closed"} role="region" data-orientation="vertical" className="overflow-hidden transition-all duration-200" style={{display: openFaq === index ? 'block' : 'none', '--radix-accordion-content-height': 'var(--radix-collapsible-content-height)', '--radix-accordion-content-width': 'var(--radix-collapsible-content-width)'}}>
                                            <div className="pb-6 pt-0 [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{'--typography-font-size': 'var(--typography-body-md-font-size)', '--typography-font-weight': 'var(--typography-body-md-font-weight)', '--typography-line-height': 'var(--typography-body-md-line-height)', '--typography-letter-spacing': 'var(--typography-body-md-letter-spacing)', '--typography-font-family': 'var(--typography-body-md-font-family)', color: '#1b1b16'}}>
                                                {faq.a}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Quick Contact Cards */}
                        <div className="w-full relative z-20 py-8 @tablet:py-16" id="quick-contact">
                            <div className="mx-auto max-w-[1536px] px-6">
                                <div className="grid grid-cols-1 @tablet:grid-cols-3 gap-8 @desktop:gap-12 justify-center items-center">
                                    {/* Card 1 */}
                                    <div className="relative w-64 h-64 @desktop:w-[320px] @desktop:h-[320px] rounded-full flex flex-col items-center justify-center p-8 text-center mx-auto transition-transform hover:scale-105 duration-300 group overflow-hidden" style={{backgroundColor: 'transparent', border: '1px solid #111827'}}>
                                        <div className="relative z-10 flex flex-col items-center">
                                            <div className="w-16 h-16 @desktop:w-20 @desktop:h-20 rounded-full flex items-center justify-center mb-4 shrink-0" style={{backgroundColor: '#c62828', color: '#ffffff'}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 @desktop:h-10 @desktop:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                    <circle cx="12" cy="11.5" r="3.5" fill="none" strokeWidth={1} />
                                                    <text x="12" y="13.5" fontFamily="Arial" fontSize="6" textAnchor="middle" fontWeight="bold" stroke="none" fill="currentColor">@</text>
                                                </svg>
                                            </div>
                                            <h3 className="text-lg @desktop:text-xl font-bold mb-1" style={{color: '#111827'}}>Email id</h3>
                                            <p className="text-sm @desktop:text-base font-medium" style={{color: '#374151'}}>neelkanthimpex51@gmail.com</p>
                                        </div>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="relative w-64 h-64 @desktop:w-[320px] @desktop:h-[320px] rounded-full flex flex-col items-center justify-center p-8 text-center mx-auto transition-transform hover:scale-105 duration-300 group overflow-hidden" style={{backgroundColor: 'transparent', border: '1px solid #111827'}}>
                                        <div className="relative z-10 flex flex-col items-center">
                                            <div className="w-16 h-16 @desktop:w-20 @desktop:h-20 rounded-full flex items-center justify-center mb-4 shrink-0" style={{backgroundColor: '#c62828', color: '#ffffff'}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 @desktop:h-9 @desktop:w-9" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.12.37 2.33.57 3.58.57 1.1 0 2 .9 2 2v3.5a2 2 0 01-2 2C9.39 23 1 14.61 1 4.5 1 3.4 1.9 2.5 3 2.5h3.5c1.1 0 2 .9 2 2 0 1.25.2 2.46.57 3.58.1.35.03.74-.27 1.11l-2.18 2.2z"/>
                                                </svg>
                                            </div>
                                            <h3 className="text-lg @desktop:text-xl font-bold mb-1" style={{color: '#111827'}}>Phone no</h3>
                                            <p className="text-sm @desktop:text-base font-medium" style={{color: '#374151'}}>+91-8684800529</p>
                                        </div>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="relative w-64 h-64 @desktop:w-[320px] @desktop:h-[320px] rounded-full flex flex-col items-center justify-center p-8 text-center mx-auto transition-transform hover:scale-105 duration-300 group overflow-hidden" style={{backgroundColor: 'transparent', border: '1px solid #111827'}}>
                                        <div className="relative z-10 flex flex-col items-center">
                                            <div className="w-16 h-16 @desktop:w-20 @desktop:h-20 rounded-full flex items-center justify-center mb-4 shrink-0" style={{backgroundColor: '#c62828', color: '#ffffff'}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 @desktop:h-10 @desktop:w-10" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                                                </svg>
                                            </div>
                                            <h3 className="text-lg @desktop:text-xl font-bold mb-1" style={{color: '#111827'}}>Address</h3>
                                            <p className="text-[11px] @desktop:text-xs font-medium leading-relaxed" style={{color: '#374151'}}>Shed No - 5, Vivek Vihar Phase 2,<br/>Block-A, Jhilmil Industrial Area,<br/>Jhilmil Colony, Delhi, 110095</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Contact;
