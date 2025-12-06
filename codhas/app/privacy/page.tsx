"use client";

import React from "react";
import ContactAndFooter from "@/components/Contact";
import { Shield, UserCheck, Lock, FileText, Database } from "lucide-react";

// 📌 Reusable Components MUST be declared OUTSIDE render
type SectionProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
};

const Section = ({ icon, title, children }: SectionProps) => (
  <div className="bg-white rounded-xl p-8 shadow border">
    <div className="flex items-center gap-3 mb-4">
      <span className="p-3 rounded-xl bg-blue-600 text-white">{icon}</span>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
    <div className="space-y-4">{children}</div>
  </div>
);

const Item = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{children}</p>
  </div>
);

// ------------------------ MAIN PAGE ------------------------

export default function PrivacyPolicy() {
  return (
    <>
      <div className="py-20 min-h-screen bg-gradient-to-b from-white to-gray-50">

        {/* HERO */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 text-center">
          <Shield className="w-14 h-14 mx-auto mb-4 opacity-90" />
          <h1 className="text-5xl font-bold">Privacy Policy</h1>
          <p className="text-blue-200 mt-2">Last Updated: Jan 2025</p>
        </div>

        {/* CONTENT */}
        <div className="container max-w-4xl mx-auto px-4 py-16 space-y-10">

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
            We collect user details only through Google Forms for internship processing,
            certificate approval, and communication purposes. By submitting data you consent to policies below.
          </div>

          <Section icon={<Shield size={20}/>} title="Information We Collect">
            <Item title="Basic Details">
              Name, email, phone number, education details when you apply.
            </Item>
            <Item title="Submission Data">
              GitHub links for project verification and completion record.
            </Item>
          </Section>

          <Section icon={<Database size={20}/>} title="How Data Is Stored">
            <Item title="Google Services">
              Your form responses are stored in Google Sheets manually.
            </Item>
            <Item title="No Local Database">
              We do not store data on private servers currently.
            </Item>
          </Section>

          <Section icon={<Lock size={20}/>} title="Payments">
            <Item title="Safe Processing">
              Payments are processed using Razorpay/UPI — we do not store card details.
            </Item>
          </Section>

          <Section icon={<UserCheck size={20}/>} title="Your Rights">
            <Item title="Delete / Modify Data">
              You can request deletion or update of your data anytime via support email/WhatsApp.
            </Item>
          </Section>

          <Section icon={<FileText size={20}/>} title="Policy Updates">
            <Item title="Changes in Future">
              As CodHas grows, policy may update. Latest date above will indicate updates.
            </Item>
          </Section>

          {/* CONTACT */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            Contact support:<br/>
            📩 Email: support@codhas.in<br/>
            📱 WhatsApp: +91 XXXXXXXXXX
          </div>

        </div>
      </div>

      <ContactAndFooter/>
    </>
  );
}
