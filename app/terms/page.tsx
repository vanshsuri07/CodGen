"use client";
import ContactAndFooter from "@/components/Contact";
import { FileCheck, AlertTriangle } from "lucide-react";
import React from "react";

interface TermsBlockProps {
  title: string;
  children: React.ReactNode;
}

const TermsBlock = ({ title, children }: TermsBlockProps) => (
  <div className="bg-white shadow p-6 rounded-xl border">
    <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
    <p className="text-gray-600 leading-relaxed">{children}</p>
  </div>
);
export default function TermsAndConditions() {
  return (
    <>
      <div className="bg-linear-to-r from-indigo-600 to-purple-700 py-40 text-center text-white">
        <FileCheck className="w-14 h-14 mx-auto mb-4 opacity-90"/>
        <h1 className="text-5xl font-bold">Terms & Conditions</h1>
        <p className="text-purple-200 mt-2">Last Updated: Jan 2025</p>
      </div>

      <div className="container max-w-4xl mx-auto px-4 py-16 space-y-10">

        <TermsBlock title="Program Nature">
          codgen provides task-based virtual internships. Certificates are issued only after work submission & review.
        </TermsBlock>

        <TermsBlock title="Submission Rules">
          - Projects must be submitted via GitHub/Drive link.<br/>
          - Plagiarism or copied work will lead to rejection.<br/>
        </TermsBlock>

        <TermsBlock title="Certificate Eligibility">
          You receive a certificate **only after completing tasks**, submitting proof, and getting approval.
        </TermsBlock>

        <TermsBlock title="Refund Policy">
          Fees once paid for certificate/report generation are **non-refundable**, except in rare technical issues.
        </TermsBlock>

        <TermsBlock title="Communication">
          All updates are sent through Email/WhatsApp. You agree to receive internship-related communication.
        </TermsBlock>

        <TermsBlock title="Use of Project Data">
          Submitted projects may be stored as proof of completion unless deletion request is made.
        </TermsBlock>

        <TermsBlock title="Liability">
          codgen does not guarantee jobs/placements. Certificate represents completion—not employment assurance.
        </TermsBlock>

        <div className="bg-yellow-50 p-6 rounded border border-yellow-400 flex gap-3">
          <AlertTriangle className="text-yellow-600 w-6 h-6 mt-1"/>
          <p className="text-gray-800">
            By joining and submitting forms, you acknowledge that you have read and agreed to these Terms.
          </p>
        </div>

       
      </div>

      <ContactAndFooter/>
    </>
  );
}


