import React, { useState } from 'react';
import { X, Calendar, Clock, Video, CheckCircle } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNotify: (message: string, type?: 'success' | 'info') => void;
}

export const BookCallModal: React.FC<BookCallModalProps> = ({ isOpen, onClose, onNotify }) => {
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('14:00 WIB');
  const [topic, setTopic] = useState('New Project Discovery');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const dates = [
    { label: 'Tomorrow', desc: 'Tuesday' },
    { label: 'Wed', desc: 'Oct 28' },
    { label: 'Thu', desc: 'Oct 29' },
    { label: 'Fri', desc: 'Oct 30' }
  ];

  const times = [
    '10:00 WIB',
    '11:30 WIB',
    '14:00 WIB',
    '15:30 WIB',
    '17:00 WIB'
  ];

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientEmail.trim()) {
      onNotify('Please enter your name and email', 'info');
      return;
    }

    setIsBooked(true);
    onNotify(`Call booked for ${selectedDate} at ${selectedTime}! Check your email for the Google Meet link.`, 'success');
  };

  const handleClose = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#141414] border border-[#2a2a2a] w-full max-w-lg rounded-2xl p-6 sm:p-8 shadow-2xl relative text-left">
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#222222] text-[#a1a1aa] hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {isBooked ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-[#22c55e] flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Strategy Call Scheduled!</h3>
            <p className="text-sm text-[#a1a1aa] mb-5">
              A calendar invitation with Google Meet details has been sent to <strong className="text-white">{clientEmail}</strong>.
            </p>
            <div className="bg-[#1c1c1c] p-4 rounded-xl border border-[#2e2e2e] text-xs text-[#d4d4d8] space-y-1.5 mb-6 text-left">
              <div><strong>Host:</strong> Aldy Azarya</div>
              <div><strong>Duration:</strong> 30 Minutes</div>
              <div><strong>When:</strong> {selectedDate} @ {selectedTime}</div>
              <div><strong>Topic:</strong> {topic}</div>
            </div>
            <button
              onClick={handleClose}
              className="w-full py-3 rounded-full bg-[#f97316] text-white font-semibold text-sm hover:bg-[#ea580c] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleConfirmBooking}>
            <div className="flex items-center gap-2.5 text-xs text-[#f97316] font-semibold mb-2">
              <Video className="w-4 h-4" />
              <span>30-Min Video Consultation</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Book a Strategy Call</h3>
            <p className="text-xs text-[#a1a1aa] leading-relaxed mb-6">
              Discuss your product requirements, architecture, or design direction directly with Aldy. No obligation.
            </p>

            {/* Select Day */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-[#a1a1aa] mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#f97316]" />
                Select Date:
              </label>
              <div className="grid grid-cols-4 gap-2">
                {dates.map((d) => (
                  <button
                    key={d.label}
                    type="button"
                    onClick={() => setSelectedDate(d.label)}
                    className={`py-2 px-1 rounded-xl text-center border transition-all ${
                      selectedDate === d.label
                        ? 'border-[#f97316] bg-[#f97316]/10 text-white'
                        : 'border-[#262626] bg-[#0d0d0d] text-[#a1a1aa] hover:border-[#3f3f46]'
                    }`}
                  >
                    <div className="text-xs font-bold">{d.label}</div>
                    <div className="text-[10px] text-[#71717a]">{d.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Select Time */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-[#a1a1aa] mb-2 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#f97316]" />
                Select Time Slot (UTC+7):
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                {times.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTime(t)}
                    className={`py-1.5 px-2 rounded-lg text-xs font-mono font-medium border text-center transition-all ${
                      selectedTime === t
                        ? 'border-[#f97316] bg-[#f97316] text-white'
                        : 'border-[#262626] bg-[#0d0d0d] text-[#a1a1aa] hover:border-[#3f3f46]'
                    }`}
                  >
                    {t.replace(' WIB', '')}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Topic */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-[#a1a1aa] mb-1.5">
                Discussion Topic
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-[#333333] rounded-xl px-3 py-2.5 text-xs text-white outline-none focus:border-[#f97316]"
              >
                <option value="New Project Discovery">New Project Discovery & Scope</option>
                <option value="Website Design & Build">Website Design & Development</option>
                <option value="Web / Mobile App Architecture">Web / Mobile App Architecture</option>
                <option value="Code Review & Consultation">Code Review & Advisory</option>
              </select>
            </div>

            {/* Client Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-[#333333] rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-[#f97316]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Work Email *"
                  required
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-[#333333] rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-[#f97316]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-sm transition-all shadow-lg shadow-orange-500/25"
            >
              Confirm Strategy Call
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
