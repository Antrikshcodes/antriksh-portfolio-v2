import { useState } from 'react'
import { ArrowRight, CheckCircle2, Play, RefreshCw, Cpu, Layers, Database, ShieldAlert, Zap } from 'lucide-react'

const ARCHITECTURES = {
  converge: {
    title: 'CONVERGE // Spatial Incident Resolution Architecture',
    protocol: 'REST + WebSockets · PostGIS Spatial Queries',
    nodes: [
      {
        id: 'input',
        title: '01. Citizen Intake',
        sub: 'GPS & Media',
        detail: 'Captures localized citizen incident report with geolocation tag and photo evidence.',
        type: 'intake',
      },
      {
        id: 'api',
        title: '02. FastAPI Gateway',
        sub: 'Payload Audit',
        detail: 'Validates schema, checks rate limits, and enqueues spatial query job.',
        type: 'process',
      },
      {
        id: 'cluster',
        title: '03. Spatial Cluster',
        sub: 'Haversine DB',
        detail: 'Correlates incidents within a 50m radius, grouping duplicates to prevent redundant dispatches.',
        type: 'core',
      },
      {
        id: 'dispatch',
        title: '04. SLA Dispatch',
        sub: 'Crew Queue',
        detail: 'Assigns priority based on severity score and initiates countdown SLA timers.',
        type: 'dispatch',
      },
      {
        id: 'verification',
        title: '05. Photo Closure',
        sub: 'Audit Sign-off',
        detail: 'Requires field crew to upload resolution photographic proof to verify closure.',
        type: 'output',
      },
    ],
  },
  'blindspot-ai': {
    title: 'Blindspot AI // Real-Time Computer Vision Pipeline',
    protocol: 'OpenCV Video Pipeline · PyTorch Tensor Inference',
    nodes: [
      {
        id: 'cam',
        title: '01. Video Input',
        sub: '60 FPS Sensor',
        detail: 'Wide-angle vehicle peripheral camera feed streamed into buffer memory.',
        type: 'intake',
      },
      {
        id: 'preprocess',
        title: '02. Normalization',
        sub: 'Contrast Equalizer',
        detail: 'Equalizes brightness and glare artifacts for reliable low-light identification.',
        type: 'process',
      },
      {
        id: 'yolo',
        title: '03. YOLO Detection',
        sub: 'Object Bounding',
        detail: 'Identifies vehicles, cyclists, and obstacles with high-confidence bounding boxes.',
        type: 'core',
      },
      {
        id: 'telemetry',
        title: '04. Optical Flow',
        sub: 'Velocity Vectors',
        detail: 'Calculates rate of approach and time-to-impact relative velocity vectors.',
        type: 'dispatch',
      },
      {
        id: 'alert',
        title: '05. Driver HUD',
        sub: '< 50ms Latency',
        detail: 'Emits immediate visual hazard level alerts to prevent dangerous lane changes.',
        type: 'output',
      },
    ],
  },
  'ordershield-ai': {
    title: 'OrderShield AI // Automated Vendor Verification Pipeline',
    protocol: 'FastAPI Microservice · Document AI OCR',
    nodes: [
      {
        id: 'vendor_in',
        title: '01. Vendor Intake',
        sub: 'GSTIN & PAN',
        detail: 'Supplier submits corporate registration credentials and financial documentation.',
        type: 'intake',
      },
      {
        id: 'registry',
        title: '02. Registry Check',
        sub: 'Public API Audit',
        detail: 'Validates registration against government corporate databases in real time.',
        type: 'process',
      },
      {
        id: 'ocr',
        title: '03. Document AI',
        sub: 'PDF Audit',
        detail: 'Extracts invoices, tax filings, and bank statements while checking for discrepancies.',
        type: 'core',
      },
      {
        id: 'trust',
        title: '04. Trust Index',
        sub: 'Weighted Matrix',
        detail: 'Computes multi-factor supplier reliability score across compliance indicators.',
        type: 'dispatch',
      },
      {
        id: 'gate',
        title: '05. Onboarding Gate',
        sub: 'Fast-Track / Flag',
        detail: 'Auto-approves verified vendors or routes questionable submissions to human review.',
        type: 'output',
      },
    ],
  },
  'product-guys': {
    title: 'The Product Guys // Content Architecture & Validation Matrix',
    protocol: 'Next.js 14 App Router · Editorial CDN',
    nodes: [
      {
        id: 'discovery',
        title: '01. Submissions',
        sub: 'Teardown Dilemmas',
        detail: 'Curates common product development bottlenecks and UX friction points.',
        type: 'intake',
      },
      {
        id: 'ia',
        title: '02. IA Mapping',
        sub: 'Friction Analysis',
        detail: 'Maps customer journeys, core value propositions, and monetization models.',
        type: 'process',
      },
      {
        id: 'validation',
        title: '03. Validation Matrix',
        sub: 'Pre-Code Testing',
        detail: 'Executes rapid user testing frameworks to validate problems before writing code.',
        type: 'core',
      },
      {
        id: 'publication',
        title: '04. Platform Delivery',
        sub: 'Next.js App',
        detail: 'Deploys structured interactive breakdowns, guides, and community resources.',
        type: 'output',
      },
    ],
  },
}

export default function ArchitectureDiagram({ projectId }) {
  const arch = ARCHITECTURES[projectId] || ARCHITECTURES.converge
  const [activeNodeIdx, setActiveNodeIdx] = useState(0)
  const [isSimulating, setIsSimulating] = useState(false)

  const activeNode = arch.nodes[activeNodeIdx]

  const runSimulation = () => {
    setIsSimulating(true)
    setActiveNodeIdx(0)

    let step = 0
    const interval = setInterval(() => {
      step += 1
      if (step < arch.nodes.length) {
        setActiveNodeIdx(step)
      } else {
        clearInterval(interval)
        setIsSimulating(false)
      }
    }, 650)
  }

  return (
    <div className="arch-diagram-wrapper">
      <div className="arch-diagram-top">
        <div>
          <span className="arch-diagram-kicker mono">INTERACTIVE SYSTEM FLOW EXPLORER</span>
          <h4 className="arch-diagram-title">{arch.title}</h4>
          <span className="arch-protocol-tag mono">{arch.protocol}</span>
        </div>

        <button
          type="button"
          className="arch-simulate-btn mono"
          onClick={runSimulation}
          disabled={isSimulating}
          aria-label="Simulate data pipeline flow"
        >
          {isSimulating ? <RefreshCw size={12} className="spin-icon" /> : <Play size={12} />}
          <span>{isSimulating ? 'SIMULATING...' : 'TEST FLOW'}</span>
        </button>
      </div>

      {/* Nodes Flow Bar */}
      <div className="arch-nodes-container">
        {arch.nodes.map((node, idx) => {
          const isSelected = activeNodeIdx === idx

          return (
            <div key={node.id} className="arch-node-wrapper">
              <button
                type="button"
                className={`arch-node-button ${isSelected ? 'is-selected' : ''}`}
                onClick={() => setActiveNodeIdx(idx)}
                aria-label={`Inspect step: ${node.title}`}
              >
                <span className="node-step-tag mono">{node.sub}</span>
                <span className="node-title-text">{node.title}</span>
                <span className="node-active-bar" />
              </button>

              {idx < arch.nodes.length - 1 && (
                <div className="arch-node-connector">
                  <ArrowRight size={14} className="connector-arrow" />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Active Step Deep-Dive Inspector */}
      <div className="arch-inspector-box">
        <div className="arch-inspector-header">
          <span className="inspector-step-badge mono">STEP 0{activeNodeIdx + 1} DETAILS</span>
          <span className="inspector-node-title">{activeNode.title}</span>
        </div>
        <p className="arch-inspector-detail">{activeNode.detail}</p>
      </div>
    </div>
  )
}

