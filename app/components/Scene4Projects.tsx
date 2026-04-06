'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

type Project = {
  title: string;
  subtitle: string;
  tech: string;
  oneLiner: string;
  stats: Array<{ value: string; label: string }>;
  summary: string;
  problem: string;
  mission: string;
  systems: Array<{ title: string; description: string }>;
  outcomes: Array<{ metric: string; description: string }>;
  accentColor: string;
  expandedBorderColor: string;
};

export function Scene4Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  useEffect(() => {
    if (expandedProject !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [expandedProject]);

  const projects: Project[] = [
    {
      title: 'SENTINELAPI',
      subtitle: 'API Security Testing Platform',
      tech: 'React.js · Node.js · Express.js · MongoDB · Socket.io',
      oneLiner: 'The scanner that finds what attackers find — before they do.',
      stats: [
        { value: '1000+', label: 'CONCURRENT CONNECTIONS' },
        { value: '<50ms', label: 'PROXY LATENCY' },
        { value: 'OWASP', label: 'REFERENCED REPORTS' },
      ],
      summary:
        'A full-stack API security platform built on the MERN stack that automates endpoint scanning for injection flaws, broken auth flows, and live threats. A real-time proxy layer intercepts traffic as it flows and flags vulnerabilities before they become incidents.',
      problem:
        'Most developers ship APIs without any automated security layer. Catching SQL injection, NoSQL injection, broken OAuth flows, or JWT vulnerabilities required manual testing — slow, inconsistent, and easy to skip under deadline pressure. Security audits happened after deployment, not before. By the time a flaw was found, it had already been exposed. There was no tooling that gave developers a fast, automated, and actionable way to test their own APIs during development — before an attacker did it for them in production.',
      mission:
        'Built a full MERN-stack platform that operates as both an automated vulnerability scanner and a live traffic proxy. The scanner hits configured endpoints with curated attack payloads — SQL injection strings, NoSQL operators, XSS vectors, malformed JWT tokens, and broken OAuth sequences — then scores each response for signs of vulnerability. In parallel, the live proxy layer sits between client and server, intercepting real requests and responses in real time via Socket.io. Every transaction is fingerprinted, logged, and analyzed. The result is a ranked audit report in JSON or HTML format: each finding mapped to its OWASP category, assigned a severity score, and paired with a concrete remediation step. Not a list of warnings. A document an engineer can act on immediately.',
      systems: [
        {
          title: 'Socket.io',
          description:
            'powers the real-time proxy monitoring layer. Chosen for its bidirectional, event-driven architecture over standard HTTP polling — this means the proxy sees every request and response as it happens, not in batches. The system sustains 1000+ concurrent connections with under 50ms overhead, keeping the proxy invisible to the application under test.',
        },
        {
          title: 'Custom Express middleware chain',
          description:
            'intercepts every incoming request before it reaches application logic. Threat signatures are matched against a pattern library covering injection, XSS, and auth attack vectors. Rate limiting is enforced at this layer — not bolted on afterward. Suspicious requests are flagged, logged, and optionally blocked without modifying any application code.',
        },
        {
          title: 'Modular scan engine',
          description:
            'each vulnerability class — SQL injection, NoSQL injection, XSS, OAuth 2.0 flows, JWT validation — runs as a fully isolated module with its own payload set and response analysis logic. Adding coverage for a new attack surface means writing one module. Nothing in the existing scan pipeline is touched. This architecture made it possible to extend the scanner repeatedly without regression risk.',
        },
        {
          title: 'JSON/HTML report engine',
          description:
            'every finding is structured data before it is a document. The engine maps each vulnerability to its OWASP category, assigns a severity level (critical, high, medium, low, informational), and generates a step-by-step remediation path. Output renders as machine-readable JSON for CI/CD integration or as a formatted HTML report for stakeholder review. Both from the same underlying finding object.',
        },
      ],
      outcomes: [
        { metric: '1000+', description: 'concurrent proxy connections sustained with under 50ms latency overhead — the proxy layer stays completely invisible to the application under test' },
        { metric: '<50ms', description: 'round-trip latency overhead on the live proxy layer across all tested configurations — real-time monitoring without measurable performance cost' },
        { metric: '100%', description: 'of reported findings include an OWASP category mapping, a severity classification, and a concrete remediation step — no finding is surfaced without a path to resolution' },
      ],
      accentColor: '#4D7CFE',
      expandedBorderColor: 'rgba(77, 124, 254, 0.5)',
    },
    {
      title: 'STRATOS POWER',
      subtitle: 'Renewable Energy Estimator',
      tech: 'Next.js · TypeScript · Go · Gorilla Mux · OpenMeteo API',
      oneLiner: 'NASA data. NREL solar feeds. One platform that actually makes sense of all of it.',
      stats: [
        { value: 'OpenMeteo', label: 'POWER WIND DATA' },
        { value: 'OpenMeteo', label: 'SOLAR IRRADIANCE' },
        { value: '12-MO', label: 'SEASONAL FORECAST' },
      ],
      summary:
        'A full-stack renewable energy estimation engine that pulls real historical irradiance and wind speed data from OpenMeteo, geocodes any address, and outputs 12-month seasonal forecasts with hardware sizing recommendations and complete ROI breakdowns — all in one platform.',
      problem:
        'Estimating how much energy a solar panel or wind turbine will actually generate at a specific location is not a simple calculation. It requires historical solar irradiance data, local wind speed patterns, seasonal variation modelling, hardware efficiency curves, and a geocoding layer to translate an address into coordinates the APIs can process. Each of these data sources lives in a different system — NASA POWER for wind, NREL for solar, OpenWeatherMap for real-time weather adjustments, Nominatim for geocoding. No unified platform existed to pull all of it together, do the computation correctly, and present the output in a form someone could actually use to make a capital investment decision. Engineers and households trying to estimate renewable energy potential were left to stitch these sources together manually, accept inaccurate averages, or pay for expensive proprietary tools.',
      mission:
        'Built a full-stack estimation engine with a Go backend that orchestrates calls to OpenMeteo, resolves addresses to coordinates via Nominatim geocoding, and applies real-time weather adjustments from OpenWeatherMap. An in-memory cache layer with configurable TTLs absorbs repeated queries for the same location — keeping the system fast and staying inside free-tier API rate limits without a database. The computation layer runs a 12-month seasonal forecasting engine that accounts for solar panel tilt angle, orientation, shading losses, and monthly irradiance variation. For wind, it calculates turbine output curves against historical speed distributions per location. The ROI module takes real local electricity rates and actual installation costs as inputs and returns payback period and lifetime savings projections — not industry averages, not rule-of-thumb estimates. Numbers specific to that location, that hardware, and that electricity price. The Next.js frontend renders this as an interactive forecast dashboard with monthly breakdowns, hardware sizing recommendations, and exportable ROI summaries.',
      systems: [
        {
          title: 'Go backend',
          description:
            'chosen because the core workload is computation-heavy: parallel API calls, floating-point energy calculations, seasonal forecast modelling across 12 data points per location, and ROI projections with dynamic rate inputs. Go handles this with low latency and no garbage collection pauses. A slower runtime would have introduced delays at exactly the moments users are waiting for forecast results.',
        },
        {
          title: 'In-memory cache with configurable TTLs',
          description:
            'NASA POWER and NREL data for a given coordinate does not change between requests made minutes apart. The cache layer intercepts repeat queries for the same location and returns the stored result — eliminating redundant external API calls entirely. TTLs are configurable per data source to match each API\'s update frequency. This keeps the system inside free-tier rate limits at scale without requiring a database layer or external cache service.',
        },
        {
          title: 'MVC architecture + Gorilla Mux',
          description:
            'each energy source — solar, wind, weather, geocoding — lives in its own handler and model. Gorilla Mux routes requests cleanly between them. This structure meant that adding the OpenWeatherMap real-time adjustment layer required writing one new handler and one new model — nothing in the solar or wind pipelines was modified. The architecture scales by addition, not by modification.',
        },
        {
          title: 'ROI analysis module',
          description:
            'takes four real inputs: local electricity rate (per kWh), system installation cost, estimated annual generation (from the forecast engine), and hardware degradation rate over time. From these it computes year-by-year savings, cumulative payback timeline, and 25-year lifetime savings projection. Every number is specific to the queried location and the user\'s actual cost inputs — not pulled from national averages or pre-computed lookup tables.',
        },
      ],
      outcomes: [
        { metric: 'Real', description: 'historical irradiance and wind speed data sourced directly from OpenMeteo API — location-specific, not regional averages or interpolated estimates' },
        { metric: '12mo', description: 'seasonal forecast generated per query, accounting for monthly irradiance variation, solar tilt and orientation optimization, and wind turbine output curves against historical speed distributions' },
        { metric: 'Full', description: 'ROI analysis computed from actual user inputs — local electricity rate, installation cost, hardware degradation — returning payback period and 25-year lifetime savings specific to that location and configuration' },
      ],
      accentColor: '#FFD6A5',
      expandedBorderColor: 'rgba(255, 214, 165, 0.4)',
    },
    {
      title: 'MOVIE BOOKING BACKEND',
      subtitle: 'Scalable REST Backend System',
      tech: 'Node.js · Express.js · MongoDB',
      oneLiner: 'Concurrent seat reservations. Zero race conditions. Nothing double-booked.',
      stats: [
        { value: '300+', label: 'CONCURRENT RECORDS' },
        { value: 'JWT', label: 'AUTH ENFORCED' },
        { value: 'REST', label: 'STANDARDIZED API' },
      ],
      summary:
        'A RESTful booking backend engineered for concurrency from the ground up. MongoDB schemas structured for simultaneous access, JWT authentication enforced at every protected route, input validation at every entry point, and standardized error responses throughout the entire API surface. Nothing left to chance.',
      problem:
        'Booking systems fail in ways that are entirely predictable — and almost always preventable. Race conditions cause two users to reserve the same seat in the same 200ms window, and both confirmations go out before either transaction has committed. Authentication layers get bypassed because route protection is inconsistent — some endpoints check the token, others assume the client is trusted. Input validation is missing or partial, so malformed data reaches the database and corrupts records silently. Error responses are inconsistent, making client-side error handling unreliable. These are not edge cases. They are the default failure modes of booking backends built without concurrency, security, and reliability as first-class constraints from the start.',
      mission:
        'Designed and built a RESTful backend from scratch with one constraint above all others: nothing fails silently and nothing is left unvalidated. MongoDB schemas were designed specifically for concurrent write patterns — using atomic operations and document-level locking strategies to prevent double-booking at the data layer before application logic even runs. JWT authentication is enforced at the middleware level across every protected route, with token validation and booking authorization checks tied together so a valid token for one user cannot be used to modify another user\'s booking. Every API endpoint validates and sanitizes its inputs before they touch the database — type checking, range validation, required field enforcement. Every failure path returns a structured error response with a consistent shape: status code, error code, human-readable message, and affected field where applicable. Clients can parse errors programmatically. Developers can debug without guessing. The API behaves the same way under load as it does in a single-user test — because the concurrency handling is at the schema and middleware level, not dependent on request timing.',
      systems: [
        {
          title: 'MongoDB schema design for concurrency',
          description:
            'seat availability is stored as an atomic document field. Reservation operations use MongoDB\'s atomic update operators to check and set availability in a single database operation — not a read followed by a write. This eliminates the race condition window entirely at the data layer. Two simultaneous requests for the same seat cannot both succeed because only one can win the atomic update.',
        },
        {
          title: 'JWT authentication middleware',
          description:
            'implemented as an Express middleware function applied at the router level to every protected route. Token validation, expiry checking, and user identity extraction happen before any route handler runs. Booking authorization — verifying that the authenticated user owns the booking they are attempting to modify — is checked in the same middleware pass. There is no route in the system where a request reaches application logic without having been authenticated.',
        },
        {
          title: 'Standardized error response layer',
          description:
            'a central error handler catches all thrown errors and formats them into a consistent response shape before they reach the client. Validation errors include the field name and the constraint that failed. Auth errors return a distinct error code from not-found errors. Database errors are caught, logged internally, and returned to the client as a generic server error — no stack traces, no internal details exposed. Every error type has a documented response shape.',
        },
        {
          title: 'Input validation throughout',
          description:
            'every endpoint that accepts a request body runs it through a validation layer before any database operation. Required fields are checked. Types are enforced. String lengths are bounded. Numeric ranges are validated. Enum fields are checked against allowed values. Malformed requests are rejected at the validation layer with a structured error response — they never reach the database. This is the first line of defence against both accidental client errors and intentional malformed input.',
        },
      ],
      outcomes: [
        { metric: '300+', description: 'concurrent booking records supported stably — schema-level atomic operations prevent double-booking regardless of simultaneous request volume' },
        { metric: 'Zero', description: 'race conditions on seat assignment — atomic MongoDB update operators handle availability checks and reservations in a single operation, eliminating the read-then-write window entirely' },
        { metric: 'Full', description: 'input validation and JWT authentication enforced at every layer — no request reaches application logic or the database without passing both checks' },
        { metric: 'Clean', description: 'standardized error response structure across all endpoints — every failure returns a consistent shape with status code, error code, message, and affected field, making client-side error handling fully predictable' },
      ],
      accentColor: 'rgba(255, 255, 255, 0.6)',
      expandedBorderColor: 'rgba(255, 255, 255, 0.2)',
    },
  ];

  const handleCardClick = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-20 md:py-24 lg:py-32">
      <motion.div style={{ opacity, y }} className="relative z-10 max-w-6xl mx-auto px-[5vw] md:px-10 lg:px-12 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-[0.2em] text-center"
          style={{ fontWeight: 100, marginBottom: 'clamp(3rem, 6vw, 6rem)' }}
        >
          MISSION LOGS
        </motion.h2>

        {/* Trajectory line */}
        <div className="relative">
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px bg-[#4D7CFE]/30 -translate-x-1/2"
            style={{ zIndex: 0 }}
          />

          {/* Projects */}
          <div className="relative" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4rem, 8vw, 8rem)' }}>
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: i * 0.2 }}
                viewport={{ once: true, margin: '-100px' }}
                className="relative"
              >
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-start ${
                    i % 2 === 0 ? '' : 'md:grid-flow-dense'
                  }`}
                >
                  {/* Connection dot */}
                  <div className="absolute left-1/2 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FFD6A5] shadow-[0_0_15px_rgba(255,214,165,0.6)] z-10" />

                  {/* Empty space for alternating layout */}
                  <div
                    className={`hidden md:block ${
                      i % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'
                    }`}
                  />

                  {/* Project card */}
                  <motion.div
                    onClick={() => handleCardClick(i)}
                    animate={{
                      borderColor:
                        expandedProject === i ? project.expandedBorderColor : 'rgba(255,255,255,0.1)',
                    }}
                    transition={{ duration: 0.35 }}
                    className={`border backdrop-blur-sm bg-black/20 hover:border-[#4D7CFE]/50 transition-all duration-500 cursor-pointer ${
                      i % 2 === 0 ? 'md:col-start-1 md:row-start-1' : 'md:col-start-2'
                    }`}
                    style={{ padding: 'clamp(1.5rem, 5vw, 3rem)' }}
                  >
                    {/* Summary content - always visible */}
                    <h3 className="tracking-wider" style={{ fontWeight: 100, fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)' }}>
                      {project.title}
                    </h3>
                    <p className="text-white/60 tracking-wide" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)' }}>{project.subtitle}</p>
                    <p className="text-white/40 tracking-wide" style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>{project.tech}</p>

                    {/* Summary paragraph */}
                    <p className="text-white/70 leading-relaxed tracking-wide" style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)', lineHeight: '1.8', marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
                      {project.summary}
                    </p>

                    {/* Expand prompt */}
                    <div
                      className="tracking-[0.2em] uppercase"
                      style={{ color: '#4D7CFE', fontSize: 'clamp(0.75rem, 1.1vw, 0.9rem)' }}
                    >
                      OPEN MISSION FILE ↓
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Overlay detail view */}
        <AnimatePresence>
          {expandedProject !== null && (
            <>
              {/* Backdrop */}
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setExpandedProject(null)}
                className="fixed inset-0 z-40"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
              />

              {/* Window */}
              <motion.div
                key="window"
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 16 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
                style={{ pointerEvents: 'none' }}
              >
                <div
                  className="hide-scrollbar relative w-full h-full max-w-[95vw] max-h-[95vh] overflow-y-auto border backdrop-blur-sm bg-black/90"
                  style={{
                    borderColor: projects[expandedProject].expandedBorderColor,
                    pointerEvents: 'auto',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                  }}
                >
                  {/* Window header */}
                  <div
                    className="sticky top-0 flex items-center justify-between border-b backdrop-blur-sm bg-black/90"
                    style={{ 
                      borderColor: 'rgba(255,255,255,0.08)',
                      padding: 'clamp(1.5rem, 4vw, 3rem) clamp(2rem, 5vw, 4rem)'
                    }}
                  >
                    <div>
                      <p
                        className="tracking-[0.25em] uppercase"
                        style={{
                          color: projects[expandedProject].accentColor,
                          fontWeight: 200,
                          fontSize: 'clamp(0.7rem, 1vw, 0.85rem)',
                          marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)'
                        }}
                      >
                        MISSION FILE
                      </p>
                      <h3 className="tracking-wider" style={{ 
                        fontWeight: 200,
                        fontSize: 'clamp(1.75rem, 3.5vw, 3rem)'
                      }}>
                        {projects[expandedProject].title}
                      </h3>
                    </div>
                    <button
                      onClick={() => setExpandedProject(null)}
                      className="text-white/40 hover:text-white/80 tracking-wider transition-colors duration-200 leading-none"
                      style={{ 
                        fontWeight: 100,
                        fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                        paddingBottom: '0.25rem'
                      }}
                    >
                      ×
                    </button>
                  </div>

                  {/* Window body */}
                  <div style={{ 
                    padding: 'clamp(2rem, 4vw, 3rem)'
                  }}>
                    <div style={{ 
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'clamp(1.75rem, 3.5vw, 2.5rem)'
                    }}>
                    {/* THE PROBLEM */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.05 }}
                    >
                      <h4
                        className="tracking-[0.25em] uppercase"
                        style={{
                          color: projects[expandedProject].accentColor,
                          fontWeight: 200,
                          fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)',
                          marginBottom: 'clamp(0.875rem, 1.75vw, 1.25rem)'
                        }}
                      >
                        THE PROBLEM
                      </h4>
                      <p
                        className="text-white/65 leading-relaxed tracking-wide"
                        style={{ 
                          fontWeight: 400,
                          fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                          lineHeight: '1.8'
                        }}
                      >
                        {projects[expandedProject].problem}
                      </p>
                    </motion.div>

                    {/* THE MISSION */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      <h4
                        className="tracking-[0.25em] uppercase"
                        style={{
                          color: projects[expandedProject].accentColor,
                          fontWeight: 200,
                          fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)',
                          marginBottom: 'clamp(0.875rem, 1.75vw, 1.25rem)'
                        }}
                      >
                        THE MISSION
                      </h4>
                      <p
                        className="text-white/65 leading-relaxed tracking-wide"
                        style={{ 
                          fontWeight: 400,
                          fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                          lineHeight: '1.8'
                        }}
                      >
                        {projects[expandedProject].mission}
                      </p>
                    </motion.div>

                    {/* SYSTEMS DEPLOYED */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.15 }}
                    >
                      <h4
                        className="tracking-[0.25em] uppercase"
                        style={{
                          color: projects[expandedProject].accentColor,
                          fontWeight: 200,
                          fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)',
                          marginBottom: 'clamp(1rem, 2vw, 1.5rem)'
                        }}
                      >
                        SYSTEMS DEPLOYED
                      </h4>
                      <div style={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'clamp(0.875rem, 1.75vw, 1.25rem)'
                      }}>
                        {projects[expandedProject].systems.map((system, j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + j * 0.06 }}
                            style={{ 
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: 'clamp(1rem, 2vw, 1.5rem)'
                            }}
                          >
                            <span
                              className="flex-shrink-0"
                              style={{ 
                                color: '#4D7CFE',
                                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                                marginTop: '0.2rem'
                              }}
                            >
                              →
                            </span>
                            <p
                              className="text-white/65 leading-relaxed tracking-wide"
                              style={{ 
                                fontWeight: 400,
                                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                                lineHeight: '1.8'
                              }}
                            >
                              <span style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>
                                {system.title}
                              </span>
                              {' — '}
                              {system.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* MISSION OUTCOMES */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                    >
                      <h4
                        className="tracking-[0.25em] uppercase"
                        style={{
                          color: projects[expandedProject].accentColor,
                          fontWeight: 200,
                          fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)',
                          marginBottom: 'clamp(1rem, 2vw, 1.5rem)'
                        }}
                      >
                        MISSION OUTCOMES
                      </h4>
                      <div style={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'clamp(0.875rem, 1.75vw, 1.25rem)'
                      }}>
                        {projects[expandedProject].outcomes.map((outcome, j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.25 + j * 0.08 }}
                            style={{
                              display: 'grid',
                              gridTemplateColumns: 'clamp(100px, 15vw, 150px) 1fr',
                              gap: 'clamp(1.5rem, 3vw, 2.5rem)',
                              alignItems: 'baseline'
                            }}
                          >
                            <div
                              className="tracking-wider"
                              style={{ 
                                color: '#FFD6A5', 
                                fontWeight: 200,
                                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)'
                              }}
                            >
                              {outcome.metric}
                            </div>
                            <div
                              className="text-white/55 tracking-wide leading-relaxed"
                              style={{ 
                                fontWeight: 400,
                                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                                lineHeight: '1.8'
                              }}
                            >
                              {outcome.description}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
