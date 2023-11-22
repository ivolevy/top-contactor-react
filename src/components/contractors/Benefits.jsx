import React from 'react';
import '../../assets/styles/Contractors.css';
import { MdOutlineVerified } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { MdCurrencyExchange } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";

const Benefits = () => {
  return (
      <section className="benefits">
        <h2 className="h2TitleContractors">Our benefits</h2>
        <div className="benefitsItems">
          <div className="benefitsItem">
            <MdOutlineVerified className="iconBenefits"/>
            <p className="benefitsTitle">Badge of Trust & Credibility</p>
            <p className="benefitsDesc">
              IF your application to join Top Contractor List is accepted, 
              your business will be exclusively presented as the "Top Contractor" 
              to homeowners within your service area.
            </p>
            <p className="benefitsSubDesc">This process helps build credibility and trust for your business.</p>
          </div>
          <div className="benefitsItem">
            <SlLocationPin className="iconBenefits"/>
            <p className="benefitsTitle">Exclusive Geographic Territory</p>
            <p className="benefitsDesc">
            Each contractor that is accepted into the Top Contractor List will receive an exclusive geographic territory. 
            New leads and booked appointments for each territory will be sent to a singe contractor within that territory. 
            </p>
            <p className="benefitsSubDesc">We do not share or farm out leads.</p>
          </div>
          <div className="benefitsItem">
            <FaRegCalendarCheck className="iconBenefits"/>
            <p className="benefitsTitle">High Quality Leads & Booked Appointments</p>
            <p className='benefitsDesc'>
              We will send you a steady supply of high quality, pre-vetted leads and/or set appointments 
            with homeowners for estimtes or inspections on your calendar.
            </p>
          </div>
          <div className="benefitsItem">
            <MdCurrencyExchange className="iconBenefits"/>
            <p className="benefitsTitle">Month-to Month, Budget-Based Billing</p>
            <p className='benefitsDesc'>
              You can decide how much you want to invest in generating leads and booked appointments for 
              your business. Billing is month-to-month with no long-term contracts.
            </p>
            <p className='benefitsSubDesc'>
              If for some reason you're not 100% satisfied, you can cancel anytime.
            </p>
          </div>
          <div className="benefitsItem">
            <IoAnalytics className="iconBenefits"/>
            <p className="benefitsTitle">CRM & Follow-Up System</p>
            <p className='benefitsDesc'>
              As the saying goes, "the fortune is in the follow-up". You will have access to a CRM which keeps track of all your leads and booked appointments. This way, you can easily folllow up by SMS, phone or email with each lead from within one central dashboard. See how much money is in your sales pipeline.﻿
            </p>
            <p className='benefitsSubDesc'>
              Fast, effective follow up will help convert more leads into sales for your business!
            </p>
          </div>
          <div className="benefitsItem">
            <GrUserManager className="iconBenefits"/>
            <p className="benefitsTitle">Dedicated Business Growth Managers</p>
            <p className='benefitsDesc'>
              An experienced business growth manager will be your point of contact and will help you generate more leads, appointments and revenue.
            </p>
          </div>
        </div>
      </section>
    );
}

export default Benefits;
