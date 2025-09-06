
import { LegalContent } from '../types';

interface LegalData {
  [key: string]: LegalContent;
}

export const LEGAL_CONTENT: LegalData = {
  'privacy-policy': {
    title: 'Privacy Policy',
    content: `
      <h2 class="text-2xl font-semibold mb-4">Privacy Policy for Haven & Hearth</h2>
      <p class="mb-4"><strong>Last Updated: [Date]</strong></p>
      
      <p class="mb-4">Haven & Hearth ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Haven & Hearth. This policy applies to our website, and its associated subdomains (collectively, our "Service"). By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h3>
      <p class="mb-4">We collect information from you when you visit our site, register, place an order, subscribe to our newsletter, or fill out a form. This information may include your name, email address, mailing address, phone number, and credit card information.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h3>
      <p class="mb-4">Any of the information we collect from you may be used to:
        <ul class="list-disc list-inside ml-4">
          <li>Personalize your experience</li>
          <li>Improve our website and customer service</li>
          <li>Process transactions</li>
          <li>Administer a contest, promotion, survey, or other site feature</li>
          <li>Send periodic emails</li>
        </ul>
      </p>

      <h3 class="text-xl font-semibold mt-6 mb-2">3. How We Protect Your Information</h3>
      <p class="mb-4">We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to keep the information confidential.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">4. Cookies</h3>
      <p class="mb-4">Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information. We use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">5. Disclosure to Outside Parties</h3>
      <p class="mb-4">We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">6. Your Consent</h3>
      <p class="mb-4">By using our site, you consent to our website's privacy policy.</p>
    `
  },
  'terms-and-conditions': {
    title: 'Terms & Conditions',
    content: `
      <h2 class="text-2xl font-semibold mb-4">Terms and Conditions</h2>
      <p class="mb-4"><strong>Last Updated: [Date]</strong></p>
      
      <p class="mb-4">Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the Haven & Hearth website (the "Service") operated by Haven & Hearth ("us", "we", or "our").</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">1. Agreement to Terms</h3>
      <p class="mb-4">By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">2. Purchases</h3>
      <p class="mb-4">If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">3. Content</h3>
      <p class="mb-4">Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">4. Intellectual Property</h3>
      <p class="mb-4">The Service and its original content, features and functionality are and will remain the exclusive property of Haven & Hearth and its licensors. The Service is protected by copyright, trademark, and other laws of both the [Your Country] and foreign countries.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">5. Governing Law</h3>
      <p class="mb-4">These Terms shall be governed and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">6. Changes</h3>
      <p class="mb-4">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.</p>
    `
  },
  'refund-and-return-policy': {
    title: 'Refund & Return Policy',
    content: `
      <h2 class="text-2xl font-semibold mb-4">Refund and Return Policy</h2>
      <p class="mb-4"><strong>Last Updated: [Date]</strong></p>
      
      <p class="mb-4">We want you to be completely satisfied with your purchase from Haven & Hearth. If for any reason you are not, we are here to help.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">1. Returns</h3>
      <p class="mb-4">You have 30 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging. Your item needs to have the receipt or proof of purchase.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">2. Refunds</h3>
      <p class="mb-4">Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item. If your return is approved, we will initiate a refund to your original method of payment. You will receive the credit within a certain amount of days, depending on your card issuer's policies.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">3. Shipping</h3>
      <p class="mb-4">You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">4. Damaged Items</h3>
      <p class="mb-4">If you receive a damaged item, please contact us immediately for assistance. We will work with you to resolve the issue, which may include a replacement or a full refund.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">5. Contact Us</h3>
      <p class="mb-4">If you have any questions on how to return your item to us, please contact our customer support team.</p>
    `
  },
  'shipping-and-delivery-policy': {
    title: 'Shipping & Delivery Policy',
    content: `
      <h2 class="text-2xl font-semibold mb-4">Shipping and Delivery Policy</h2>
      <p class="mb-4"><strong>Last Updated: [Date]</strong></p>
      
      <p class="mb-4">Thank you for visiting and shopping at Haven & Hearth. The following are the terms and conditions that constitute our Shipping Policy.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">1. Shipment Processing Time</h3>
      <p class="mb-4">All orders are processed within 2-3 business days. Orders are not shipped or delivered on weekends or holidays. If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery. If there will be a significant delay in the shipment of your order, we will contact you via email.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">2. Shipping Rates & Delivery Estimates</h3>
      <p class="mb-4">Shipping charges for your order will be calculated and displayed at checkout.
        <ul class="list-disc list-inside ml-4">
          <li><strong>Standard Shipping:</strong> 5-7 business days, $5.99</li>
          <li><strong>Expedited Shipping:</strong> 2-3 business days, $12.99</li>
          <li><strong>Free Shipping:</strong> On orders over $75</li>
        </ul>
        Delivery delays can occasionally occur.
      </p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">3. Shipment Confirmation & Order Tracking</h3>
      <p class="mb-4">You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">4. Customs, Duties, and Taxes</h3>
      <p class="mb-4">Haven & Hearth is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">5. International Shipping</h3>
      <p class="mb-4">We currently do not ship outside of [Your Country].</p>
    `
  },
  'disclaimer': {
    title: 'Disclaimer',
    content: `
      <h2 class="text-2xl font-semibold mb-4">Disclaimer</h2>
      <p class="mb-4"><strong>Last Updated: [Date]</strong></p>
      
      <p class="mb-4">The information provided by Haven & Hearth ("we," "us," or "our") on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">1. External Links Disclaimer</h3>
      <p class="mb-4">The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties or links to websites and features. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">2. Professional Disclaimer</h3>
      <p class="mb-4">The site cannot and does not contain professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">3. Product Disclaimer</h3>
      <p class="mb-4">All products on this website should be used as directed by the manufacturer. Haven & Hearth is not liable for any damages resulting from the misuse of any product sold on our website. Please read all labels, warnings, and directions provided with the product before use.</p>
      
      <p class="mb-4"><strong>The legal information provided here is for informational purposes only and does not constitute legal advice. You should consult with a legal professional to ensure compliance with all applicable laws and regulations.</strong></p>
    `
  }
};
