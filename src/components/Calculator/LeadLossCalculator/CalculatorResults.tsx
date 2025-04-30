import React from 'react';
import { Check, X, ArrowUpRight, AlertCircle, Phone, DollarSign } from 'lucide-react';
import { useForm } from '../../../context/FormContext';
import type { LeadLossResults } from './types';
import { formatCurrency } from '../../../utils/formatting';
import Button from '../../ui/Button';

interface CalculatorResultsProps {
  results: LeadLossResults | null;
  isValid: boolean;
}

export default function CalculatorResults({ results, isValid }: CalculatorResultsProps) {
  const { openForm } = useForm();

  if (!isValid || !results) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-text-body text-center text-lg">
          Enter your values above to see potential savings
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/5 rounded-xl border border-white/10 p-8 space-y-6">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(255,77,141,0.15)] hover:bg-white/10 group">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-[#FF4D8D] to-[#E7447F] p-2.5 transition-all duration-300 group-hover:scale-110 shadow-[0_0_15px_rgba(255,77,141,0.3)] group-hover:shadow-[0_0_25px_rgba(255,77,141,0.4)]">
              <Phone className="h-full w-full text-white" />
            </div>
            <div className="mt-4">
              <div className="text-lg text-[#FF4D8D] font-bold mb-1">Current Calls</div>
              <div className="text-2xl text-white font-bold group-hover:text-[#FF4D8D] transition-colors">
                {Math.round(results.recruiterCallsPerMonth).toLocaleString()}
              </div>
              <div className="text-sm text-text-body">Monthly calls with current team</div>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(255,77,141,0.15)] hover:bg-white/10 group">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-[#FF4D8D] to-[#E7447F] p-2.5 transition-all duration-300 group-hover:scale-110 shadow-[0_0_15px_rgba(255,77,141,0.3)] group-hover:shadow-[0_0_25px_rgba(255,77,141,0.4)]">
              <Phone className="h-full w-full text-white" />
            </div>
            <div className="mt-4">
              <div className="text-lg text-[#FF4D8D] font-bold mb-1">AI Capacity</div>
              <div className="text-2xl text-white font-bold group-hover:text-[#FF4D8D] transition-colors">
                {Math.round(results.aiCallsPerMonth).toLocaleString()}
              </div>
              <div className="text-sm text-text-body">Monthly calls with ConvoFlow</div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(255,77,141,0.15)] hover:bg-white/10 group">
          <h3 className="text-xl font-bold text-white mb-4">Impact Analysis</h3>
          <div className="prose prose-invert">
            <p className="text-text-body leading-relaxed">
              Your current setup is significantly impacting your conversion potential:
            </p>
            <ul className="space-y-2 text-text-body list-disc pl-4 mt-4">
              <li>
                <span className="text-[#FF4D8D] font-semibold">{formatCurrency(results.salaryWasted)}</span> wasted 
                on staff qualifying leads
              </li>
              <li>
                <span className="text-[#FF4D8D] font-semibold">{formatCurrency(results.wastedAdBudget)}</span> in 
                wasted ad budget due to poor call to action and time delays
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(255,77,141,0.15)] hover:bg-white/10 group">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-[#FF4D8D] to-[#E7447F] p-2.5 mr-4">
              <DollarSign className="h-full w-full text-white" />
            </div>
            <div className="mt-4">
              <div className="text-2xl text-[#FF4D8D] font-bold flex items-center gap-2">
                {results.additionalAgentsNeeded}
                <span className="text-white text-base font-normal">Agents Needed</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(255,77,141,0.15)] hover:bg-white/10 group">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-[#FF4D8D] to-[#E7447F] p-2.5 mr-4">
              <AlertCircle className="h-full w-full text-white" />
            </div>
            <div className="mt-4">
              <div className="text-sm text-text-body mb-1">Total Leads Lost</div>
              <div className="text-2xl text-[#FF4D8D] font-bold">{Math.round(results.leadsLost)}</div>
              <div className="text-xs text-text-body mt-1">
                Potential conversions missed with current setup
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button 
        size="lg"
        className="w-full sm:w-auto group"
        onClick={openForm}
      >
        <span className="flex items-center justify-center">
          Boost Your Conversions 3.5x
          <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </span>
      </Button>
    </div>
  );
}