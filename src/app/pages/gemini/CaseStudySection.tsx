import { motion } from 'motion/react';
import { FileText, Download, ArrowRight } from 'lucide-react';

/** Case study PDF: served from public (copied from Final Submission folder). */
export const GEMINI_CASE_STUDY_PDF_URL = '/gemini-case-study.pdf';
export const GEMINI_CASE_STUDY_PDF_FILENAME = 'Where_Thoughts_Become_Reality_Case_Study.pdf';

export function CaseStudySection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-[#0a0516] to-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(7,142,250,0.08),transparent_50%)]" />

      <div className="relative max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border-2 border-[#078EFA]/30 bg-white/5 backdrop-blur-sm p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#078EFA]/20 to-[#AD89EB]/10 rounded-full blur-3xl" />

          <div className="relative flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#078EFA] to-[#AD89EB]">
              <FileText className="w-10 h-10 text-white" />
            </div>

            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Full case study
              </h2>
              <p className="text-white/80 text-lg mb-6">
                Strategy, research, and creative execution for the Google Gemini campaign — available as a PDF for download or to read in-browser.
              </p>

              <motion.a
                href={GEMINI_CASE_STUDY_PDF_URL}
                download={GEMINI_CASE_STUDY_PDF_FILENAME}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#078EFA] to-[#AD89EB] shadow-[0_0_30px_rgba(7,142,250,0.4)] hover:shadow-[0_0_50px_rgba(7,142,250,0.5)] transition-shadow"
              >
                <Download className="w-5 h-5" />
                <span>Download case study (PDF)</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
