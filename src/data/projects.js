const data = [
  {
    title: 'AES-PIM architecture for secure computation',
    subtitle: 'Processing in Memory',
    image: '/images/projects/aes-pim.png',
    date: '2026-05-01',
    link: 'https://doi.org/10.1145/3787109.3815271',
    desc:
      'Memory Encryption is a novel hardware architecture for secure computation in modern multi-tenant systems, focusing on software-hardware co-design. Combining AES, a symmetric encryption algorithm, and PIM architecture, we shift the Trusted Computing Base (TCB) from the CPU to the memory system itself, enhancing the security and efficiency of the system.',
  },
  {
    title: 'YAVIN: Unified Architecture for Secure Edge Processing in Memory',
    subtitle: 'Processing in Memory · Post-Quantum Security',
    image: '/images/projects/yavin.png',
    date: '2026-08-01',
    link: 'https://arxiv.org/abs/2608.13496',
    desc:
      'A follow-up to AES-PIM that extends the trusted execution environment from the processor into DRAM. YAVIN builds a unified Trusted Computing Base spanning CPU and processing-in-memory, using LightSaber post-quantum KEM and ASCON-128 authenticated encryption so data can be decrypted, computed, and re-encrypted in memory without exposing plaintext on the untrusted memory bus. Relative to PIM-AES, YAVIN achieves more than a 20× cryptographic speedup, with 34% and 9.3% overhead on INT8 and INT32 quantized edge-class LLMs versus plaintext execution.',
  },
];

export default data;
