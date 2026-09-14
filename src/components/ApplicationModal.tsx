import React, { useState } from 'react';
import { X, Check, Sparkles, ArrowRight, Heart } from 'lucide-react';
import { COACHING_PATHWAYS } from '../data/siteData';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPath?: string;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  initialPath = '1-on-1',
}) => {
  const [selectedPathway, setSelectedPathway] = useState<string>(initialPath);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [handle, setHandle] = useState('');
  const [currentGoal, setCurrentGoal] = useState('');
  const [biggestFriction, setBiggestFriction] = useState('');
  const [commitment, setCommitment] = useState('ready-now');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1A1614]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] border border-[#201C19]/20 shadow-2xl p-6 sm:p-10 my-8">
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 text-[#201C19]/60 hover:text-[#201C19] transition-colors"
          aria-label="Close application form"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 sm:py-12 space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#BA5A3A]/10 text-[#BA5A3A] mx-auto flex items-center justify-center">
              <Sparkles className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#BA5A3A] font-bold">
                APPLICATION RECEIVED
              </span>
              <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#201C19] font-normal">
                Thank you, {fullName || 'friend'}.
              </h3>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#6B625B] max-w-md mx-auto leading-relaxed">
              Ro personally reviews each application to ensure it's a mutual fit for deep,
              sustainable growth. You will hear back via email within 24–48 hours.
            </p>

            <div className="p-4 bg-[#F4EFEB] border border-[#201C19]/10 max-w-md mx-auto text-left text-xs text-[#201C19] space-y-1">
              <div className="font-semibold uppercase tracking-wider text-[10px] text-[#BA5A3A]">
                WHAT HAPPENS NEXT:
              </div>
              <p>1. Ro reviews your goals and schedule fit.</p>
              <p>2. We'll send an invite to book your free 20-min Alignment Call.</p>
              <p>3. If we both feel the click, we begin onboarding your custom coaching portal!</p>
            </div>

            <button
              onClick={resetAndClose}
              className="inline-flex items-center px-8 py-3.5 bg-[#201C19] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#BA5A3A] transition-colors"
            >
              RETURN TO WEBSITE
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="border-b border-[#201C19]/10 pb-5 mb-6">
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#BA5A3A] mb-1">
                ROOTED COLLECTIVE / APPLICATION
              </div>
              <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#201C19] font-normal">
                Apply for Coaching with Ro
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#6B625B] mt-1 font-light">
                Please take 2 minutes to share where you're at. Spaces are strictly capped to ensure
                high-touch mentorship.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 text-xs sm:text-sm">
              {/* Pathway Choice */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#201C19] mb-2">
                  1. CHOOSE YOUR COACHING PATHWAY:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {COACHING_PATHWAYS.map((p) => (
                    <button
                      type="button"
                      key={p.id}
                      onClick={() => setSelectedPathway(p.id)}
                      className={`p-3.5 border text-left transition-all ${
                        selectedPathway === p.id
                          ? 'border-[#BA5A3A] bg-[#BA5A3A]/5 text-[#201C19] shadow-sm'
                          : 'border-[#201C19]/15 text-[#6B625B] hover:border-[#201C19]/40'
                      }`}
                    >
                      <div className="font-serif-editorial text-lg text-[#201C19] font-normal leading-none mb-1">
                        {p.title}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-[#BA5A3A] font-semibold">
                        {p.subtitle}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#201C19] mb-1.5">
                    YOUR FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Maya Lindqvist"
                    className="w-full bg-[#FAF7F2] border border-[#201C19]/20 px-3.5 py-2.5 text-xs text-[#201C19] placeholder-[#6B625B]/50 focus:outline-none focus:border-[#BA5A3A]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#201C19] mb-1.5">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. maya@example.com"
                    className="w-full bg-[#FAF7F2] border border-[#201C19]/20 px-3.5 py-2.5 text-xs text-[#201C19] placeholder-[#6B625B]/50 focus:outline-none focus:border-[#BA5A3A]"
                  />
                </div>
              </div>

              {/* Social handle & Location */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#201C19] mb-1.5">
                  INSTAGRAM HANDLE OR LOCATION (OPTIONAL)
                </label>
                <input
                  type="text"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  placeholder="@handle or City, Country"
                  className="w-full bg-[#FAF7F2] border border-[#201C19]/20 px-3.5 py-2.5 text-xs text-[#201C19] placeholder-[#6B625B]/50 focus:outline-none focus:border-[#BA5A3A]"
                />
              </div>

              {/* Goal Description */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#201C19] mb-1.5">
                  2. WHAT IS YOUR PRIMARY FOCUS / WHAT WOULD SUCCESS FEEL LIKE? *
                </label>
                <textarea
                  required
                  rows={3}
                  value={currentGoal}
                  onChange={(e) => setCurrentGoal(e.target.value)}
                  placeholder="e.g. I want to build real strength with barbell lifts, stop feeling guilty about food on weekends, and feel proud when I look in the mirror..."
                  className="w-full bg-[#FAF7F2] border border-[#201C19]/20 px-3.5 py-2.5 text-xs text-[#201C19] placeholder-[#6B625B]/50 focus:outline-none focus:border-[#BA5A3A] resize-none"
                />
              </div>

              {/* Biggest roadblock */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#201C19] mb-1.5">
                  3. WHAT HAS HELD YOU BACK OR FELT HARDEST IN THE PAST? *
                </label>
                <input
                  type="text"
                  required
                  value={biggestFriction}
                  onChange={(e) => setBiggestFriction(e.target.value)}
                  placeholder="e.g. All-or-nothing mindset, falling off when work gets hectic, lack of accountability..."
                  className="w-full bg-[#FAF7F2] border border-[#201C19]/20 px-3.5 py-2.5 text-xs text-[#201C19] placeholder-[#6B625B]/50 focus:outline-none focus:border-[#BA5A3A]"
                />
              </div>

              {/* Readiness choice */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#201C19] mb-1.5">
                  WHEN ARE YOU READY TO BEGIN?
                </label>
                <select
                  value={commitment}
                  onChange={(e) => setCommitment(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#201C19]/20 px-3.5 py-2.5 text-xs text-[#201C19] focus:outline-none focus:border-[#BA5A3A]"
                >
                  <option value="ready-now">Ready now / within the next 1–2 weeks</option>
                  <option value="next-month">Planning for next month</option>
                  <option value="exploring">Just gathering information for now</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#201C19] hover:bg-[#BA5A3A] text-[#FAF7F2] font-semibold text-xs uppercase tracking-[0.2em] transition-colors shadow-md flex items-center justify-center space-x-2"
                >
                  <span>SUBMIT APPLICATION TO RO</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center text-[11px] text-[#6B625B] mt-2 font-serif-editorial italic">
                  Private & confidential. No spam ever.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
