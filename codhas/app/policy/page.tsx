"use client";
import React from "react";
import { RotateCcw, Info, CheckCircle, AlertTriangle } from "lucide-react";
import ContactAndFooter from "@/components/Contact";

// Reusable block component
interface BlockProps {
  title: string;
  children: React.ReactNode;
}

const Block = ({ title, children }: BlockProps) => (
  <div className="bg-white shadow p-6 rounded-xl border">
    <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
    <div className="text-gray-600 leading-relaxed space-y-3">
      {children}
    </div>
  </div>
);


export default function RefundPolicy() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-rose-700 py-40 text-center text-white">
        <RotateCcw className="w-14 h-14 mx-auto mb-4 opacity-95"/>
        <h1 className="text-5xl font-bold">Refund & Cancellation Policy</h1>
        <p className="text-rose-200 mt-2">Last Updated: Jan 2025</p>
      </div>

      {/* Main Content */}
      <div className="container max-w-4xl mx-auto px-4 py-16 space-y-10">

        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded text-gray-800">
          The following terms apply when you make a payment to CodHas for
          internship certification, report generation or related services.
          Using our platform means you agree to this policy.
        </div>

        <Block title="1. No Refund After Certificate/Report Issued">
          Once the internship certificate or report is generated, 
          **refund cannot be processed under any circumstances.**
        </Block>

       <Block title="2. Eligibility Before Approval">
  <p>Refund is only considered if:</p>
  <ul className="list-disc ml-6 mt-2 space-y-1">
    <li>Payment was made by mistake (duplicate/accidental)</li>
    <li>No certificate/report has been issued yet</li>
    <li>User has not submitted tasks/projects</li>
  </ul>
</Block>


        <Block title="3. Task Submission Requirement">
          Certificates are awarded only upon completion and verification of tasks.
          If you fail to complete or submit work, **no refund will be given.**
        </Block>

        <Block title="4. Processing Time">
          Approved refunds (rare cases) are processed within **5–10 working days**
          back to the original payment source.
        </Block>

        <Block title="5. Non-Refundable Fees">
          - Internship training fees (if any)  
          - Certificate generation fees  
          - Report creation charges  
          - Late submission charges (if applied)  

          *Service fee covers evaluation and admin effort — not a product sale.*
        </Block>

        <Block title="6. Technical Payment Issues">
          If money is deducted but payment status is not updated,
          contact us with proof (screenshot/transaction ID) — we will verify with Razorpay/UPI.
        </Block>

        <Block title="7. Cancellation of Enrollment">
          You may cancel participation anytime, but **payment cannot be refunded**
          if certificate/report has already been processed.
        </Block>

        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 flex gap-3">
          <AlertTriangle className="text-yellow-600 w-6 h-6 mt-1"/>
          <p className="text-gray-700 font-medium">
            Note: This policy prevents misuse and maintains internship credibility.
          </p>
        </div>
{/* 
        <div className="bg-gray-100 p-6 rounded border">
          <p className="font-semibold text-gray-800 mb-2">For refund-related queries:</p>
          📩 Email: support@codhas.in<br/>
          📱 WhatsApp: +91 XXXXXXXXXX
        </div> */}

      </div>

      <ContactAndFooter/>
    </>
  );
}
