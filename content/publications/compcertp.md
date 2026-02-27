---
title: "Modeling Register Pairs in CompCert"
description: "This paper extends the CompCert verified C compiler to support register pairs enhancing support for 32-bit architecture. Published in IFM24"
date: 2024-11-13
tags: ["program verification", "compilers", "semantics", "register allocation", "CompCert", "Rocq"]
draft: false
url: "/compcertp"
summary: "CompCert treats all registers the same, allocating an entire 64-bit pair for 32-bit values. This cuts the number of available registers in half and requires fix-up outside the formally verified compiler to comply with calling conventions. We introduce CompCert${}^p$, an extension to the CompCert compiler, which faithfully models register pairs, thereby reducing the TCB. We adapt the proofs for all CompCert-supported architectures and demonstrate that, despite a slight increase in compile time, CompCert${}^p$ generates code that is either smaller or comparable in size to that produced by the original CompCert."
DateFormat: "Jan 01, 2006"
author: ["Alexander Loitzl", "Florian Zuleger"]
editPost:
  URL: "https://doi.org/10.1007/978-3-031-76554-4_8"
  Text: "IFM 2024"
---

## Download {#download}

-   [Paper](compcertp.pdf)
-   [Code and data](https://github.com/alexloitzl/compcertp)


## Abstract {#abstract}

The CompCert C compiler is a moderately optimizing, formally verified compiler that ensures the preservation of the input program’s semantics through a machine-checkable correctness proof. We introduce CompCert\\({}^p\\), an extension of the CompCert compiler, which incorporates the modeling of register pairs. This enhancement targets 32-bit architectures, such as the 32-bit Arm, which combine two registers to support 64-bit operands. So far, CompCert abstracts register pairs as 64-bit registers and allocates the entire pair when operating on 32-bit values, effectively cutting the number of available registers for 32-bit computations in half. This creates a harder register allocation problem and the emitted code requires post-processing outside of the formally verified compiler to comply with calling conventions. Our enhancement models all of Arm’s registers, improving register allocation and the generated code’s size. Additionally, it models the correct calling conventions for floating-point arguments within the formal semantics, eliminating the need for unverified modifications and therefore decreasing the trusted computing base (TCB). We adapt the proofs for all CompCert-supported architectures and demonstrate that, despite a slight increase in compile time, CompCert\\({}^p\\) generates code that is either smaller or comparable in size to that produced by the original CompCert.


## Citation {#citation}

Loitzl, A., Zuleger, F. (2025). Modeling Register Pairs in CompCert. In: Kosmatov, N., Kovács, L. (eds) _Integrated Formal Methods_. IFM 2024. Lecture Notes in Computer Science, vol 15234. Springer, Cham. <https://doi.org/10.1007/978-3-031-76554-4_8>

```bibtex
@InProceedings{compcertp,
author="Loitzl, Alexander
and Zuleger, Florian",
editor="Kosmatov, Nikolai
and Kov{\'a}cs, Laura",
title="Modeling Register Pairs in CompCert",
booktitle="Integrated Formal Methods",
year="2025",
publisher="Springer Nature Switzerland",
address="Cham",
pages="128--147",
isbn="978-3-031-76554-4"
}
```


## Related material {#related-material}

-   [Presentation slides](ifm24.pdf)
