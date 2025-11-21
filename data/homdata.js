export const dataSection2 = [
  {
    id: 1,
    img: "/assets/image/home/Image-export.png",
    title: "Compliance you can prove",
    description:
      "GDPR Article 32 lists encryption as an appropriate measure; the UK ICO recommends using encryption for data at rest/transit given its availability and cost.",
  },
  {
    id: 2,
    img: "/assets/image/home/Image-export 1.png",
    title: "Operational reality on Linux",
    description:
      "Native LUKS/dm-crypt is robust, but enabling it after OS install typically means backup → wipe → encrypt → restore — downtime most programs cannot accept.",
  },

  {
    id: 3,
    img: "/assets/image/home/Image-export 2.png",
    title: "Stronger trust from power-on",
    description:
      "PBA is the trusted layer before the OS loads; modern implementations support multi-factor (e.g., smart card/CAC/PIV + PIN) for high-assurance access.",
  },
  {
    id: 4,
    img: "/assets/image/home/Image-export 3.png",
    title: "Parity with your Windows program",
    description:
      "BitLocker is lifecycle-managed via Intune/ConfigMgr/MBAM (policies, escrow, dashboards). SDLinux brings comparable governance to Linux.",
  },
];

export const dataSection3 = [
  {
    id: 1,
    title: "In-place initial encryption",
    desc: "Turn on full-disk encryption across existing Linux fleets <strong> without reinstalling</strong> the OS—eliminating the backup/wipe cycle that blocks most DIY LUKS rollouts.",
  },
  {
    id: 2,
    title:
      'Quick Conversion <span class="inline-block">(used-space-first)</span>',
    desc: "Encrypt <strong> only used sectors </strong> first—often <strong> ~10% </strong> of a full pass—so activation completes in <strong>minutes</strong>; the thorough pass finishes in the background. ",
    width: 269,
  },
  {
    id: 3,
    title: "MFA at Pre-Boot (PBA)",
    desc: "Enforce <strong> multi-factor </strong> at power-on (e.g., CAC/PIV, smart card, or password+token) with policy-driven recovery—establish trust <i> before </i> the OS is exposed.",
    width: 269,
  },
  {
    id: 4,
    title: "OSA (OS-agnostic SED mode)",
    desc: "Leverages <strong>TCG Opal SED </strong> with a lightweight PBA in the <strong>shadow MBR</strong>.<br>After unlock, the OS sees a normal disk—so <strong> any Linux distribution works </strong> without per-distro integration.",
    rowSpan: 2, // đánh dấu sẽ chiếm 2 row
    image: "/assets/image/home/Frame 48095781.png",
    width: 269,
  },
  {
    id: 5,
    title: "Centralized policy, keys & compliance",
    desc: "A single console for <strong>key escrow/ rotation</strong>, policy assignment, <strong>status dashboards</strong>, and <strong>auditable reports</strong>—bringing Linux up to your BitLocker governance standard.",
    width: 269,
  },
  {
    id: 6,
    title: "Pre-boot networking",
    desc: "Reach devices <strong> before the OS </strong> is up for remote unlock and recovery. Community patterns (e.g., LUKS+Dropbear) show feasibility; SDLinux makes it <strong> enterprise-ready. </strong>",
    width: 269,
  },
  {
    id: 7,
    title: "Where servers with RAID-controller FDE fit",
    desc: "Many Linux servers already use <strong> RAID-controller FDE </strong> and auto-boot—keep it where it fits. Teams adopt SDLinux for servers when they need <strong> centralized key management/escrow, PBA-level MFA, remote unlock </strong>, and <strong> audit-grade reporting</strong>, or when they want <strong> policy consistency </strong> with Linux endpoints and Windows.",
    colSpan: 2, // đánh dấu sẽ chiếm 2 col
    width: 594,
  },
];

export const dataSection4 = [
  {
    id: 1,
    topic: "Initial enablement",
    sdlinux:
      '<strong class="inline-block">In-place </strong> encryption (no reinstall)',
    nativeLinuxTool: "Backup → wipe → encrypt → restore common",
    bitlocker: "Intune/ConfigMgr/MBAM automate BitLocker",
  },
  {
    id: 2,
    topic: "Time to protection",
    sdlinux:
      '<strong>Minutes</strong> via <strong class="inline-block">used-space-first</strong>',
    nativeLinuxTool: "Long change windows & rebuilds",
    bitlocker: "Hours → automated",
  },
  {
    id: 3,
    topic: "Pre-boot trust",
    sdlinux: '<strong class="inline-block">MFA at PBA,</strong> policy-driven',
    nativeLinuxTool: "DIY, inconsistent",
    bitlocker: "TPM+PIN or PBA",
  },
  {
    id: 4,
    topic: "Compliance evidence",
    sdlinux: "Centralized escrow & reporting",
    nativeLinuxTool: "Scripts & host logs",
    bitlocker: "Escrow, dashboards, reports",
  },
  {
    id: 5,
    topic: "Pre-boot networking",
    sdlinux: '<strong class="inline-block">Remote unlock</strong> & recovery',
    nativeLinuxTool: "Not typical",
    bitlocker: "Limited/vendor-specific",
  },
];
export const dataSection5 = [
  {
    id: 1,
    title: "Digital sovereignty",
    image: "/assets/image/home/Frame 48095752.png",
    description:
      "Public administrations are moving to Linux & open source. The German state of <strong>Schleswig-Holstein</strong> is migrating ~<strong>30,000</strong> workplaces to Linux/LibreOffice—explicitly citing sovereignty, security, and control.",
  },
  {
    id: 2,
    title: "Proven at scale",
    image: "/assets/image/home/Frame 48095752 1.png",
    // description: "The <strong>French National Gendarmerie</strong> deployed tens of thousands of Ubuntu desktops, documenting multi-million-euro savings and independence from proprietary stacks. Digital sovereignty.",
    description:
      "The <strong>French National Gendarmerie</strong> deployed tens of thousands of Ubuntu desktops, documenting multimillioneuro savings and independence from proprietary stacks.",
  },
];
export const dataSection6 = [
  {
    id: 1,
    title: "GDPR Article 32",
    description:
      "“Appropriate measures,” including encryption; ongoing confidentiality, integrity, availability, and recoverability.",
  },
  {
    id: 2,
    title: "UK ICO (encryption)",
    description:
      "Regulatory guidance explicitly recommending encryption for stored/transmitted personal data; practical, risk-based implementation advice.",
  },
  {
    id: 2,
    title: "CMMC / HIPAA / PCI-DSS",
    description:
      "Appropriate measures,” including encryption; ongoing confidentiality, integrity, availability, and recoverability.",
  },
];

export const dataKeyManegement = [
  {
    id: 1,
    title: "Single management console",
    description:
      "Define, deploy, and monitor encryption policies for Linux, Windows, and macOS systems from a unified interface.",
  },
  {
    id: 2,
    title: "Secure key escrow",
    description:
      "Store and recover encryption keys safely within the enterprise server or integrated cloud.",
  },
  {
    id: 3,
    title: "Audit-ready reporting",
    description:
      "Generate compliance and access reports to meet requirements such as HIPAA, CMMC, and PIPEDA.",
  },
  {
    id: 4,
    title: "Remote unlock & recovery",
    description:
      "Unlock or recover encrypted systems remotely — ideal for data-center and field-server use.",
  },
  {
    id: 5,
    title: "Consistent policy enforcement",
    description:
      "Maintain unified encryption standards across mixed OS environments.",
  },
  {
    id: 6,
    title: "FIPS 140-2 validated encryption",
    description:
      "All key operations rely on WinMagic’s certified cryptographic engine using AES-256",
  },
];

export const dataUnitedStateStandards = [
  {
    id: 1,
    title: "CMMC",
    image: "/assets/icon/Group 24.svg",
    description: "COMPLIANT",
  },
  {
    id: 2,
    title: "FedRAMP",
    image: "/assets/icon/Group 25.svg",
    description: "CLOUD SERVICE",
  },
  {
    id: 3,
    title: "NIST",
    image: "/assets/icon/Group 23 1.svg",
    description: '<span class ="inline-block">800-171</span> <span class="inline-block">800-53</span>',
  },
  {
    id: 4,
    title: "FISMA",
    image: "/assets/icon/Group 23.svg",
    description: "COMPLIANT",
  },
  {
    id: 5,
    title: "CJIS",
    image: "/assets/icon/Group 23 2.svg",
    description: "COMPLIANT",
  },
  {
    id: 6,
    title: "ITAR",
    image: "/assets/icon/Group 26.svg",
    description: "Export CONTROL",
  },
  {
    id: 7,
    title: "NIAP",
    image: "/assets/image/home/Group 26 fw.png",
    description: "COMPLIANT",
  },
  {
    id: 8,
    title: "HIPAA",
    image: "/assets/icon/Group 28.svg",
    description: "COMPLIANT",
  },
  {
    id: 9,
    title: "SOX",
    image: "/assets/icon/Group 29.svg",
    description: "FINANCIAL",
  },
  {
    id: 10,
    title: "PCI DSS",
    image: "/assets/icon/Group 30.svg",
    description: "COMPLIANT",
  },
  {
    id: 11,
    title: "IRS 1075",
    image: "/assets/icon/Group 31.svg",
    description: "TAX INFORMATION",
  },
  {
    id: 12,
    title: "IRS 1075",
    image: "/assets/icon/Group 32.svg",
    description: "DEFEMSE CONTRACTORS",
  },
  {
    id: 13,
    title: "EAR",
    image: "/assets/icon/Group 33.svg",
    description: "EXPORT CONTROL",
  },
];

export const dataCanadaStandards =[
   {
    id: 1,
    title: "SP 800-53",
    image: "/assets/icon/Group 23 1.svg",
    description: "for cryptography",
  },
  {
    id: 2,
    title: "FIPS 140-2",
    image: "/assets/icon/Group 34.svg",
    description: "for cryptography",
  },
  {
    id: 3,
    title: "B/C",
    image: "/assets/icon/Group 35.svg",
    description: " Canada Federal Government ",
  },
  {
    id: 4,
    title: "SSC",
    image: "/assets/icon/Group 35.svg",
    description: "Federal cloud workloads",
  },
  {
    id: 5,
    title: "PIPEDA",
    image: "/assets/icon/Group 36.svg",
    description: "Private sector",
  },
  {
    id: 6,
    title: "FINTRAC",
    image: "/assets/icon/Group 37.svg",
    description: "Banking fintech",
  },
  
]