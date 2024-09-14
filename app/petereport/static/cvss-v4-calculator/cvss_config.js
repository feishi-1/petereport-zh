// Copyright FIRST, Red Hat, and contributors
// SPDX-License-Identifier: BSD-2-Clause

cvssConfig = {
    "基础指标": {
        "metric_groups": {
            "可利用性指标": {
                "攻击要求（AT）": {
                    "tooltip": "此指标捕获了启用攻击的易受攻击系统的先决部署和执行条件或变量。这些不同于安全增强技术/技术（参考攻击复杂性），因为这些条件的主要目的不是明确减轻攻击，而是由于易受攻击系统的部署和执行而自然出现。",
                    "options": {
                        "出席（P）": {
                            "tooltip": "成功的攻击取决于启用攻击的易受攻击系统的特定部署和执行条件的存在。这些包括：必须赢得竞争条件才能成功利用漏洞（攻击的成功取决于攻击者无法完全控制的执行条件，或者攻击可能需要对单个目标多次发起才能成功）；攻击者必须将自己注入目标和受害者请求的资源之间的逻辑网络路径中（例如，需要在线攻击者的漏洞）。",
                            "value": "P"
                        },
                        "无 (N)": {
                            "tooltip": "成功的攻击并不取决于易受攻击系统的部署和执行条件。攻击者可以预期能够在所有或大多数漏洞实例下访问漏洞并执行漏洞利用。",
                            "value": "N"
                        }
                    },
                    "short": "AT",
                    "selected": "N"
                },
                "所需特权（PR）": {
                    "tooltip": "此指标描述了攻击者在成功利用漏洞之前必须拥有的特权级别。攻击者在攻击前获取特权凭据的方法（例如免费试用帐户）不在此指标范围内。通常，如果攻击者可以在攻击中授予自己特权，则自助服务配置的帐户不构成特权要求。",
                    "options": {
                        "高 (H)": {
                            "tooltip": "攻击者需要对易受攻击的系统提供重要（例如管理）控制的权限，以允许完全访问易受攻击系统的设置和文件。",
                            "value": "H"
                        },
                        "低 (L)": {
                            "tooltip": "攻击者需要提供基本功能的权限，这些功能通常仅限于单个低权限用户拥有的设置和资源。或者，具有低权限的攻击者只能访问非敏感资源。",
                            "value": "L"
                        },
                        "无 (N)": {
                            "tooltip": "攻击者在攻击前未经授权，因此不需要对易受攻击系统的设置或文件进行任何访问即可进行攻击。",
                            "value": "N"
                        }
                    },
                    "short": "PR",
                    "selected": "N"
                },
                "攻击复杂性（AC）": {
                    "tooltip": "该指标捕获了攻击者必须采取的可衡量的行动，以主动规避或绕过现有的内置安全增强条件，从而获得有效的漏洞利用。这些情况的主要目的是提高安全性和/或增加漏洞利用工程的复杂性。在没有特定目标变量的情况下可利用的漏洞的复杂性低于需要非平凡定制的漏洞。此指标旨在捕获易受攻击系统使用的安全机制。",
                    "options": {
                        "高 (H)": {
                            "tooltip": "成功的攻击取决于对现有安全增强技术的规避或规避，否则这些技术会阻碍攻击。这些包括：规避漏洞利用缓解技术，例如，必须规避地址空间随机化（ASLR）或数据执行预防（DEP），才能使攻击成功；获取特定目标的秘密。攻击者必须收集一些特定于目标的秘密，然后攻击才能成功。秘密是指无法通过任何侦察获得的任何信息。为了获得秘密，攻击者必须执行额外的攻击或破坏其他安全措施（例如，可能需要密钥的知识来破坏加密通道）。必须对每个被攻击的目标执行此操作。",
                            "value": "H"
                        },
                        "低 (L)": {
                            "tooltip": "攻击者不得采取任何可测量的行动来利用该漏洞。该攻击不需要特定于目标的规避来利用该漏洞。攻击者可以期望对易受攻击的系统取得可重复的成功。",
                            "value": "L"
                        }
                    },
                    "short": "AC",
                    "selected": "L"
                },
                "攻击向量（AV）": {
                    "tooltip": "该指标反映了漏洞利用的可能背景。攻击者利用易受攻击的系统的距离越远（逻辑上和物理上），此度量值（以及由此产生的严重性）就越大。假设可以从整个网络中利用漏洞的潜在攻击者数量大于可以利用需要物理访问设备的漏洞的潜在黑客数量，因此需要更严重的攻击。",
                    "options": {
                        "本地 (L)": {
                            "tooltip": "易受攻击的系统未绑定到网络堆栈，攻击者的路径是通过读/写/执行功能。攻击者要么通过本地访问目标系统（如键盘、控制台），要么通过终端模拟（如SSH）利用该漏洞；或者攻击者依赖于另一个人的用户交互来执行利用漏洞所需的操作（例如使用社会工程技术诱骗合法用户打开恶意文档）。",
                            "value": "L"
                        },
                        "网络 (N)": {
                            "tooltip": "易受攻击的系统绑定到网络堆栈，可能的攻击者范围超出了下面列出的其他选项，甚至包括整个互联网。这种漏洞通常被称为“可远程利用”，可以被认为是一种可在协议级别利用的攻击，一个或多个网络跳跃（例如，通过一个或更多路由器）。",
                            "value": "N"
                        },
                        "物理 (P)": {
                            "tooltip": "该攻击要求攻击者物理地触摸或操纵易受攻击的系统。身体互动可能是短暂的（例如，邪恶的女仆攻击）或持续的。",
                            "value": "P"
                        },
                        "相邻（A）": {
                            "tooltip": "易受攻击的系统绑定到协议栈，但攻击仅限于协议级别的逻辑相邻拓扑。这可能意味着攻击必须从相同的共享邻近（例如蓝牙、NFC或IEEE 802.11）或逻辑网络（例如本地IP子网）发起，或者从安全或其他有限的管理域（例如MPLS、管理网络区域内的安全VPN）发起。",
                            "value": "A"
                        }
                    },
                    "short": "AV",
                    "selected": "N"
                },
                "用户交互（UI）": {
                    "tooltip": "该指标捕获了除攻击者之外的人类用户参与成功入侵易受攻击系统的要求。该指标决定了漏洞是否可以仅由攻击者随意利用，或者是否必须由单独的用户（或用户发起的进程）以某种方式参与。",
                    "options": {
                        "被动（P）": {
                            "tooltip": "成功利用此漏洞需要目标用户与易受攻击的系统和攻击者的有效载荷进行有限的交互。这些交互将被视为非自愿的，不需要用户主动破坏脆弱系统中内置的保护。",
                            "value": "P"
                        },
                        "无 (N)": {
                            "tooltip": "除了攻击者之外，任何人类用户都可以在没有交互的情况下利用易受攻击的系统。",
                            "value": "N"
                        },
                        "活动（A）": {
                            "tooltip": "成功利用此漏洞需要目标用户与易受攻击的系统和攻击者的有效载荷进行特定的、有意识的交互，否则用户的交互将积极破坏保护机制，从而导致漏洞的利用。",
                            "value": "A"
                        }
                    },
                    "short": "UI",
                    "selected": "N"
                }
            },
            "易受攻击的系统影响指标": {
                "保密（VC）": {
                    "tooltip": "该指标衡量了由于成功利用漏洞而对脆弱系统管理的信息机密性的影响。保密性是指仅允许授权用户访问和披露信息，并防止未经授权的用户访问或披露信息。",
                    "options": {
                        "高 (H)": {
                            "tooltip": "机密性完全丧失，导致易受攻击系统内的所有信息都泄露给了攻击者。或者，只能访问一些受限的信息，但披露的信息会产生直接、严重的影响。例如，攻击者窃取了管理员的密码或web服务器的私有加密密钥。",
                            "value": "H"
                        },
                        "低 (L)": {
                            "tooltip": "存在一定程度的保密性缺失。获得了对某些受限信息的访问，但攻击者无法控制获得了哪些信息，或者损失的数量或种类是有限的。信息披露不会对易受攻击的系统造成直接、严重的损失。",
                            "value": "L"
                        },
                        "无 (N)": {"tooltip": "易受攻击的系统内不会丢失机密性。", "value": "N"}
                    },
                    "short": "VC",
                    "selected": "N"
                },
                "可用性（VA）": {
                    "tooltip": "此指标衡量成功利用漏洞对脆弱系统可用性的影响。虽然机密性和完整性影响指标适用于系统使用的数据（如信息、文件）的机密性或完整性的丧失，但该指标是指受影响系统本身的可用性丧失，如网络服务（如网络、数据库、电子邮件）。由于可用性是指信息资源的可访问性，因此消耗网络带宽、处理器周期或磁盘空间的攻击都会影响系统的可用性。",
                    "options": {
                        "高 (H)": {
                            "tooltip": "完全丧失可用性，导致攻击者能够完全拒绝访问易受攻击系统中的资源；这种损失要么是持续的（当攻击者继续进行攻击时），要么是持续性的（即使在攻击完成后，这种情况仍然存在）。或者，攻击者有能力拒绝某些可用性，但可用性的丧失会对易受攻击的系统造成直接、严重的后果（例如，攻击者无法中断现有连接，但可以阻止新连接；攻击者可以反复利用一个漏洞，在每次成功攻击的情况下，该漏洞只会泄漏少量内存，但在反复利用后会导致服务完全不可用）。",
                            "value": "H"
                        },
                        "低 (L)": {
                            "tooltip": "性能降低或资源可用性中断。即使可以重复利用该漏洞，攻击者也无法完全拒绝向合法用户提供服务。脆弱系统中的资源要么始终部分可用，要么仅在某些时候完全可用，但总体而言，对脆弱系统没有直接、严重的后果。",
                            "value": "L"
                        },
                        "无 (N)": {"tooltip": "对易受攻击系统内的可用性没有影响。", "value": "N"}
                    },
                    "short": "VA",
                    "selected": "N"
                },
                "诚信（VI）": {
                    "tooltip": "此指标衡量成功利用漏洞对完整性的影响。诚信是指信息的可信度和准确性。当攻击者对系统数据进行未经授权的修改时，脆弱系统的完整性会受到影响。当系统用户可以拒绝在系统上下文中采取的关键操作时（例如，由于日志记录不足），完整性也会受到影响。",
                    "options": {
                        "高 (H)": {
                            "tooltip": "完整性完全丧失，或完全失去保护。例如，攻击者能够修改受易受攻击系统保护的任何/所有文件。或者，只能修改一些文件，但恶意修改会对易受攻击的系统造成直接、严重的后果。",
                            "value": "H"
                        },
                        "低 (L)": {
                            "tooltip": "数据修改是可能的，但攻击者无法控制修改的结果，或者修改的量是有限的。数据修改不会对易受攻击的系统产生直接、严重的影响。",
                            "value": "L"
                        },
                        "无 (N)": {"tooltip": "易受攻击系统内没有完整性损失。", "value": "N"}
                    },
                    "short": "VI",
                    "selected": "N"
                }
            },
            "后续系统影响指标": {
                "可用性（SA）": {
                    "tooltip": "该指标衡量成功利用漏洞对后续系统可用性的影响。虽然机密性和完整性影响指标适用于系统使用的数据（如信息、文件）的机密性或完整性的丧失，但该指标是指受影响系统本身的可用性丧失，如网络服务（如网络、数据库、电子邮件）。由于可用性是指信息资源的可访问性，因此消耗网络带宽、处理器周期或磁盘空间的攻击都会影响系统的可用性。",
                    "options": {
                        "高 (H)": {
                            "tooltip": "完全丧失可用性，导致攻击者能够完全拒绝访问后续系统中的资源；这种损失要么是持续的（当攻击者继续进行攻击时），要么是持续性的（即使在攻击完成后，这种情况仍然存在）。或者，攻击者有能力拒绝某些可用性，但可用性的丧失会对后续系统造成直接、严重的后果（例如，攻击者无法中断现有连接，但可以阻止新连接；攻击者可以反复利用一个漏洞，在每次成功攻击的情况下，该漏洞只会泄漏少量内存，但在反复利用后会导致服务完全不可用）。",
                            "value": "H"
                        },
                        "低 (L)": {
                            "tooltip": "性能降低或资源可用性中断。即使可以重复利用该漏洞，攻击者也无法完全拒绝向合法用户提供服务。后续系统中的资源要么始终部分可用，要么仅在某些时候完全可用，但总体而言，对后续系统没有直接、严重的后果。",
                            "value": "L"
                        },
                        "无 (N)": {
                            "tooltip": "对后续系统内的可用性没有影响，或者所有可用性影响仅限于易受攻击的系统。",
                            "value": "N"
                        }
                    },
                    "short": "SA",
                    "selected": "N"
                },
                "保密（SC）": {
                    "tooltip": "该指标衡量了成功利用漏洞对后续系统管理的信息机密性的影响。保密性是指仅允许授权用户访问和披露信息，并防止未经授权的用户访问或披露信息。",
                    "options": {
                        "高 (H)": {
                            "tooltip": "机密性完全丧失，导致后续系统中的所有资源都泄露给了攻击者。或者，只能访问一些受限的信息，但披露的信息会产生直接、严重的影响。例如，攻击者窃取了管理员的密码或web服务器的私有加密密钥。",
                            "value": "H"
                        },
                        "低 (L)": {
                            "tooltip": "存在一定程度的保密性缺失。获得了对某些受限信息的访问，但攻击者无法控制获得了哪些信息，或者损失的数量或种类是有限的。信息披露不会对后续系统造成直接、严重的损失。",
                            "value": "L"
                        },
                        "无 (N)": {
                            "tooltip": "后续系统内没有保密性损失，或者所有保密性影响都仅限于易受攻击的系统。",
                            "value": "N"
                        }
                    },
                    "short": "SC",
                    "selected": "N"
                },
                "完整性（SI）": {
                    "tooltip": "此指标衡量成功利用漏洞对完整性的影响。诚信是指信息的可信度和准确性。当攻击者对系统数据进行未经授权的修改时，后续系统的完整性会受到影响。当系统用户可以拒绝在系统上下文中采取的关键操作时（例如，由于日志记录不足），完整性也会受到影响。",
                    "options": {
                        "高 (H)": {
                            "tooltip": "完整性完全丧失，或完全失去保护。例如，攻击者能够修改受后续系统保护的任何/所有文件。或者，只能修改一些文件，但恶意修改会对后续系统造成直接、严重的后果。",
                            "value": "H"
                        },
                        "低 (L)": {
                            "tooltip": "数据修改是可能的，但攻击者无法控制修改的结果，或者修改的量是有限的。数据修改不会对后续系统产生直接、严重的影响。",
                            "value": "L"
                        },
                        "无 (N)": {
                            "tooltip": "后续系统内没有完整性损失，或者所有完整性影响仅限于易受攻击的系统。",
                            "value": "N"
                        }
                    },
                    "short": "SI",
                    "selected": "N"
                }
            }
        }, "fill": "supplier"
    },
    "补充指标": {
        "metric_groups": {
            "": {
                "恢复（R）": {
                    "tooltip": "恢复描述了在执行攻击后，系统在性能和可用性方面恢复服务的弹性。",
                    "options": {
                        "无法挽回（I）": {"tooltip": "执行攻击后，用户无法恢复系统服务。", "value": "I"},
                        "用户 (U)": {"tooltip": "在执行攻击后，该系统需要用户手动干预以恢复服务。", "value": "U"},
                        "无 (X)": {"tooltip": "该指标尚未评估。", "value": "X"},
                        "自动（A）": {"tooltip": "执行攻击后，系统会自动恢复服务。", "value": "A"}
                    },
                    "short": "R",
                    "selected": "X"
                },
                "安全（S）": {
                    "tooltip": "当一个系统确实具有与安全相一致的预期用途或适用性时，利用该系统中的漏洞可能会产生安全影响，这可以在补充指标组中表示。缺少安全度量值并不意味着可能没有任何与安全相关的影响。",
                    "options": {
                        "出席（P）": {
                            "tooltip": "漏洞的后果符合IEC 61508“边缘”、“关键”或“灾难性”后果类别的定义",
                            "value": "P"
                        },
                        "可忽略（N）": {
                            "tooltip": "漏洞的后果符合IEC 61508后果类别“可忽略不计”的定义",
                            "value": "N"
                        },
                        "无 (X)": {"tooltip": "该指标尚未评估。", "value": "X"}
                    },
                    "short": "S",
                    "selected": "X"
                },
                "自动化 (AU)": {
                    "tooltip": "“可自动化”指标捕捉到了“攻击者能否跨多个目标自动化此漏洞的利用事件？”这个问题的答案基于杀死链的步骤1-4[Hchins等人，2011]。这些步骤是侦察、武器化、投送和开发。",
                    "options": {
                        "否 (N)": {
                            "tooltip": "由于某种原因，攻击者无法可靠地自动化此漏洞的杀死链的所有4个步骤。这些步骤是侦察、武器化、投送和开发。",
                            "value": "N"
                        },
                        "是 (Y)": {
                            "tooltip": "攻击者可以可靠地自动化杀死链的所有4个步骤。这些步骤是侦察、武器化、交付和利用（例如，漏洞是“可蠕虫的”）。",
                            "value": "Y"
                        },
                        "无 (X)": {"tooltip": "该指标尚未评估。", "value": "X"}
                    },
                    "short": "AU",
                    "selected": "X"
                },
                "供应商紧急程度（U）": {
                    "tooltip": "为了便于采用标准化的方法来纳入额外的提供者提供的评估，可以使用一种名为提供者紧急程度的可选“通过”补充指标。注：虽然产品供应链上的任何评估提供商都可以提供提供商紧急程度评级。Penultimate产品提供商（PPP）最适合直接评估提供商的紧迫性。",
                    "options": {
                        "红色": {"tooltip": "提供商已评估此漏洞的影响具有最高的紧迫性。", "value": "Red"},
                        "黄色": {"tooltip": "提供商已将此漏洞的影响评估为中度紧急。", "value": "Amber"},
                        "无 (X)": {"tooltip": "该指标尚未评估。", "value": "X"},
                        "绿色": {"tooltip": "提供商已评估此漏洞的影响，认为其紧迫性降低。", "value": "Green"},
                        "清除": {"tooltip": "提供商已评估此漏洞的影响不具有紧迫性（信息性）。", "value": "Clear"}
                    },
                    "short": "U",
                    "selected": "X"
                },
                "漏洞响应工作（RE）": {
                    "tooltip": "漏洞响应努力度量的目的是提供补充信息，说明消费者对其基础设施中部署的产品和服务的漏洞影响做出初步响应的困难程度。然后，消费者在应用缓解措施和/或安排补救措施时，可以考虑这些关于所需努力的额外信息。",
                    "options": {
                        "高 (H)": {
                            "tooltip": "应对漏洞所需的行动是重大和/或困难的，可能会导致延长的预定服务影响。出于日程安排的目的，需要考虑这一点，包括遵守对所选响应部署的任何禁令。或者，无法远程响应现场的漏洞。该漏洞的唯一解决方案涉及物理更换（例如，部署的部队必须召回进行仓库级维修或更换）。示例包括：高权限驱动程序更新、微码或UEFI BIOS更新，或在实施前需要仔细分析和了解任何潜在基础设施影响的软件升级。最近的一个很好的例子是，UEFI BIOS更新会影响可信平台模块（TPM）认证，而不会影响Bit locker等磁盘加密软件。不可修复的故障，如不可引导的闪存子系统、故障的磁盘或固态驱动器（SSD）、损坏的内存模块、网络设备或其他不可恢复的保修硬件，也应被评为努力程度高。",
                            "value": "H"
                        },
                        "低 (L)": {
                            "tooltip": "应对漏洞所需的努力很低/微不足道。示例包括：就更好的文档、配置变通方法或供应商的指导进行沟通，这些指导不需要消费实体立即更新、升级或更换，如防火墙过滤器配置。",
                            "value": "L"
                        },
                        "中等（M）": {
                            "tooltip": "响应漏洞所需的操作需要代表消费者付出一些努力，并且可能对实现的服务影响最小。示例包括：简单的远程更新、禁用子系统或低接触软件升级，如驱动程序更新。",
                            "value": "M"
                        },
                        "无 (X)": {"tooltip": "该指标尚未评估。", "value": "X"}
                    },
                    "short": "RE",
                    "selected": "X"
                },
                "值密度（V）": {
                    "tooltip": "值密度描述了攻击者将通过单个利用事件获得控制的资源。",
                    "options": {
                        "漫射（D）": {
                            "tooltip": "脆弱的系统资源有限。也就是说，攻击者通过单个利用事件获得控制的资源相对较小。Diffuse（想想：有限）值密度的一个例子是对单个电子邮件客户端漏洞的攻击。",
                            "value": "D"
                        },
                        "浓缩（C）": {
                            "tooltip": "脆弱的系统资源丰富。从启发式的角度来看，这样的系统通常是“系统操作员”而不是用户的直接责任。集中（想想：广泛）价值密度的一个例子是对中央电子邮件服务器的攻击。",
                            "value": "C"
                        },
                        "无 (X)": {"tooltip": "该指标尚未评估。", "value": "X"}
                    },
                    "short": "V",
                    "selected": "X"
                }
            }
        }, "fill": "supplier"
    },
    "环境（修改后的基础指标）": {
        "metric_groups": {
            "可利用性指标": {
                "所需特权（MPR）": {
                    "tooltip": "这些指标使消费者分析师能够根据用户环境的特定特征覆盖单个基本指标值。此指标描述了攻击者在成功利用漏洞之前必须拥有的特权级别。攻击者在攻击前获取特权凭据的方法（例如免费试用帐户）不在此指标范围内。通常，如果攻击者可以在攻击中授予自己特权，则自助服务配置的帐户不构成特权要求。",
                    "options": {
                        "高 (H)": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "H"},
                        "低 (L)": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "L"},
                        "无 (N)": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "N"},
                        "无 (X)": {"tooltip": "该指标尚未评估。", "value": "X"}
                    },
                    "short": "MPR",
                    "selected": "X"
                },
                "攻击要求（MAT）": {
                    "tooltip": "这些指标使消费者分析师能够根据用户环境的特定特征覆盖单个基本指标值。此指标捕获了启用攻击的易受攻击系统的先决部署和执行条件或变量。这些不同于安全增强技术/技术（参考攻击复杂性），因为这些条件的主要目的不是明确减轻攻击，而是由于易受攻击系统的部署和执行而自然出现。",
                    "options": {
                        "出席（P）": {
                            "tooltip": "此度量值与上面定义的基本度量值具有相同的定义。",
                            "value": "P"
                        },
                        "无 (N)": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "N"},
                        "无 (X)": {"tooltip": "该指标尚未评估。", "value": "X"}
                    },
                    "short": "MAT",
                    "selected": "X"
                },
                "攻击复杂性（MAC）": {
                    "tooltip": "这些指标使消费者分析师能够根据用户环境的特定特征覆盖单个基本指标值。该指标捕获了攻击者必须采取的可衡量的行动，以主动规避或绕过现有的内置安全增强条件，从而获得有效的漏洞利用。这些情况的主要目的是提高安全性和/或增加漏洞利用工程的复杂性。在没有特定目标变量的情况下可利用的漏洞的复杂性低于需要非平凡定制的漏洞。此指标旨在捕获易受攻击系统使用的安全机制。",
                    "options": {
                        "高 (H)": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "H"},
                        "低 (L)": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "L"},
                        "无 (X)": {"tooltip": "该指标尚未评估。", "value": "X"}
                    },
                    "short": "MAC",
                    "selected": "X"
                },
                "攻击向量（MAV）": {
                    "tooltip": "这些指标使消费者分析师能够根据用户环境的特定特征覆盖单个基本指标值。该指标反映了漏洞利用的可能背景。攻击者利用易受攻击的系统的距离越远（逻辑上和物理上），此度量值（以及由此产生的严重性）就越大。假设可以从整个网络中利用漏洞的潜在攻击者数量大于可以利用需要物理访问设备的漏洞的潜在黑客数量，因此需要更严重的攻击。",
                    "options": {
                        "本地 (L)": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "L"},
                        "网络 (N)": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "N"},
                        "物理 (P)": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "P"},
                        "相邻（A）": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "A"},
                        "无 (X)": {"tooltip": "该指标尚未评估。", "value": "X"}
                    },
                    "short": "MAV",
                    "selected": "X"
                },
                "用户交互（MUI）": {
                    "tooltip": "这些指标使消费者分析师能够根据用户环境的特定特征覆盖单个基本指标值。该指标捕获了除攻击者之外的人类用户参与成功入侵易受攻击系统的要求。该指标决定了漏洞是否可以仅由攻击者随意利用，或者是否必须由单独的用户（或用户发起的进程）以某种方式参与。",
                    "options": {
                        "被动（P）": {
                            "tooltip": "此度量值与上面定义的基本度量值具有相同的定义。",
                            "value": "P"
                        },
                        "无 (N)": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "N"},
                        "活动（A）": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "A"},
                        "无 (X)": {"tooltip": "该指标尚未评估。", "value": "X"}
                    },
                    "short": "MUI",
                    "selected": "X"
                }
            },
            "易受攻击的系统影响指标": {
                "保密性（MVC）": {
                    "tooltip": "这些指标使消费者分析师能够根据用户环境的特定特征覆盖单个基本指标值。该指标衡量了由于成功利用漏洞而对脆弱系统管理的信息机密性的影响。保密性是指仅允许授权用户访问和披露信息，并防止未经授权的用户访问或披露信息。",
                    "options": {
                        "高 (H)": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "H"},
                        "低 (L)": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "L"},
                        "无 (N)": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "N"},
                        "无 (X)": {"tooltip": "该指标尚未评估。", "value": "X"}
                    },
                    "short": "MVC",
                    "selected": "X"
                },
                "完整性（MVI）": {
                    "tooltip": "这些指标使消费者分析师能够根据用户环境的特定特征覆盖单个基本指标值。此指标衡量成功利用漏洞对完整性的影响。诚信是指信息的可信度和准确性。当攻击者对系统数据进行未经授权的修改时，脆弱系统的完整性会受到影响。当系统用户可以拒绝在系统上下文中采取的关键操作时（例如，由于日志记录不足），完整性也会受到影响。",
                    "options": {
                        "高 (H)": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "H"},
                        "低 (L)": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "L"},
                        "无 (N)": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "N"},
                        "无 (X)": {"tooltip": "该指标尚未评估。", "value": "X"}
                    },
                    "short": "MVI",
                    "selected": "X"
                },
                "可用性（MVA）": {
                    "tooltip": "这些指标使消费者分析师能够根据用户环境的特定特征覆盖单个基本指标值。此指标衡量成功利用漏洞对脆弱系统可用性的影响。虽然机密性和完整性影响指标适用于系统使用的数据（如信息、文件）的机密性或完整性的丧失，但该指标是指受影响系统本身的可用性丧失，如网络服务（如网络、数据库、电子邮件）。由于可用性是指信息资源的可访问性，因此消耗网络带宽、处理器周期或磁盘空间的攻击都会影响系统的可用性。",
                    "options": {
                        "高 (H)": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "H"},
                        "低 (L)": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "L"},
                        "无 (N)": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "N"},
                        "无 (X)": {"tooltip": "该指标尚未评估。", "value": "X"}
                    },
                    "short": "MVA",
                    "selected": "X"
                }
            },
            "后续系统影响指标": {
                "完整性（MSI）": {
                    "tooltip": "这些指标使消费者分析师能够根据用户环境的特定特征覆盖单个基本指标值。此指标衡量成功利用漏洞对完整性的影响。诚信是指信息的可信度和准确性。当攻击者对系统数据进行未经授权的修改时，后续系统的完整性会受到影响。当系统用户可以拒绝在系统上下文中采取的关键操作时（例如，由于日志记录不足），完整性也会受到影响。除了为感兴趣的系统定义的逻辑系统外，后续系统还可以包括对人类的影响。",
                    "options": {
                        "安全（S）": {
                            "tooltip": "被利用的漏洞将导致完整性影响，可能对人类行为者或参与者造成严重伤害或更严重的伤害（IEC 61508中所述的“边缘”或更严重类别）。",
                            "value": "S"
                        },
                        "高 (H)": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "H"},
                        "低 (L)": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "L"},
                        "可忽略（N）": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "N"},
                        "无 (X)": {"tooltip": "该指标尚未评估。", "value": "X"}
                    },
                    "short": "MSI",
                    "selected": "X"
                },
                "保密（MSC）": {
                    "tooltip": "这些指标使消费者分析师能够根据用户环境的特定特征覆盖单个基本指标值。该指标衡量了成功利用漏洞对后续系统管理的信息机密性的影响。保密性是指仅允许授权用户访问和披露信息，并防止未经授权的用户访问或披露信息。",
                    "options": {
                        "": {},
                        "高 (H)": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "H"},
                        "低 (L)": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "L"},
                        "可忽略（N）": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "N"},
                        "无 (X)": {"tooltip": "该指标尚未评估。", "value": "X"}
                    },
                    "short": "MSC",
                    "selected": "X"
                },
                "可用性（MSA）": {
                    "tooltip": "这些指标使消费者分析师能够根据用户环境的特定特征覆盖单个基本指标值。该指标衡量成功利用漏洞对后续系统可用性的影响。虽然机密性和完整性影响指标适用于系统使用的数据（如信息、文件）的机密性或完整性的丧失，但该指标是指受影响系统本身的可用性丧失，如网络服务（如网络、数据库、电子邮件）。由于可用性是指信息资源的可访问性，因此消耗网络带宽、处理器周期或磁盘空间的攻击都会影响系统的可用性。除了为感兴趣的系统定义的逻辑系统外，后续系统还可以包括对人类的影响。",
                    "options": {
                        "安全（S）": {
                            "tooltip": "被利用的漏洞将导致可用性影响，可能对人类行为者或参与者造成严重伤害或更严重的伤害（IEC 61508中所述的“边缘”或更严重类别）。",
                            "value": "S"
                        },
                        "高 (H)": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "H"},
                        "低 (L)": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "L"},
                        "可忽略（N）": {"tooltip": "此度量值与上面定义的基本度量值具有相同的定义。", "value": "N"},
                        "无 (X)": {"tooltip": "该指标尚未评估。", "value": "X"}
                    },
                    "short": "MSA",
                    "selected": "X"
                }
            }
        }, "fill": "consumer"
    },
    "环境（安全要求）": {
        "metric_groups": {
            "": {
                "完整性要求（IR）": {
                    "tooltip": "该指标使消费者能够根据受影响的IT资产对分析师组织的重要性（以完整性衡量）定制评估。也就是说，如果IT资产支持完整性最重要的业务功能，分析师可以为完整性指标赋予相对于机密性和可用性更大的价值。",
                    "options": {
                        "高 (H)": {
                            "tooltip": "诚信缺失可能会对组织或与组织相关的个人产生灾难性的不利影响。",
                            "value": "H"
                        },
                        "低 (L)": {
                            "tooltip": "诚信缺失可能只会对组织或与组织相关的个人产生有限的不利影响。",
                            "value": "L"
                        },
                        "中 (M)": {
                            "tooltip": "诚信缺失可能会对组织或与组织相关的个人产生严重的不利影响。",
                            "value": "M"
                        },
                        "无 (X)": {
                            "tooltip": "分配此值表示没有足够的信息来选择其他值之一，并且对整体环境得分没有影响",
                            "value": "X"
                        }
                    },
                    "short": "IR",
                    "selected": "X"
                },
                "可用性要求（AR）": {
                    "tooltip": "该指标使消费者能够根据受影响的IT资产对分析师组织的重要性（以可用性衡量）定制评估。也就是说，如果IT资产支持可用性最重要的业务功能，分析师可以相对于机密性和完整性为可用性指标赋予更大的价值。",
                    "options": {
                        "高（H）": {
                            "tooltip": "可用性丧失可能会对组织或与组织相关的个人产生灾难性的不利影响。",
                            "value": "H"
                        },
                        "低 (L)": {
                            "tooltip": "可用性丧失可能只会对组织或与组织相关的个人产生有限的不利影响。",
                            "value": "L"
                        },
                        "中 (M)": {
                            "tooltip": "可用性丧失可能会对组织或与组织相关的个人产生严重的不利影响。",
                            "value": "M"
                        },
                        "无 (X)": {
                            "tooltip": "分配此值表示没有足够的信息来选择其他值之一，并且对整体环境得分没有影响",
                            "value": "X"
                        }
                    },
                    "short": "AR",
                    "selected": "X"
                },
                "保密要求（CR）": {
                    "tooltip": "该指标使消费者能够根据受影响的IT资产对分析师组织的重要性（以保密性衡量）定制评估。也就是说，如果IT资产支持保密性最重要的业务功能，分析师可以相对于完整性和可用性为保密性指标赋予更大的价值。",
                    "options": {
                        "高 (H)": {
                            "tooltip": "失去保密性可能会对组织或与组织相关的个人产生灾难性的不利影响。",
                            "value": "H"
                        },
                        "低 (L)": {
                            "tooltip": "失去保密性可能只会对组织或与组织相关的个人产生有限的不利影响。",
                            "value": "L"
                        },
                        "中 (M)": {
                            "tooltip": "失去保密性可能会对组织或与组织相关的个人产生严重的不利影响。",
                            "value": "M"
                        },
                        "无 (X)": {
                            "tooltip": "分配此值表示没有足够的信息来选择其他值之一，并且对整体环境得分没有影响",
                            "value": "X"
                        }
                    },
                    "short": "CR",
                    "selected": "X"
                }
            }
        }, "fill": "consumer"
    },
    "威胁指标": {
        "metric_groups": {
            "": {
                "利用成熟度（E）": {
                    "tooltip": "该指标衡量漏洞被攻击的可能性，通常基于漏洞利用技术的当前状态、漏洞利用代码的可用性或活跃的“野外”漏洞利用。CVSS消费者有责任根据有关利用代码/流程的可用性和利用技术的状态的信息填充利用成熟度（E）的值。这些信息将被称为“威胁情报”。",
                    "options": {
                        "POC (P)": {
                            "tooltip": "根据威胁情报来源，以下各项必须适用：·概念证明已公开·不知道有人试图利用此漏洞进行攻击·不知道用于简化利用漏洞的尝试的公开解决方案",
                            "value": "P"
                        },
                        "无 (X)": {
                            "tooltip": "未使用漏洞利用成熟度度量。可靠的威胁情报无法确定漏洞利用成熟度特征。",
                            "value": "X"
                        },
                        "Attacked (A)": {
                            "tooltip": "根据威胁情报来源，必须适用以下任一条件：·已报告针对此漏洞的攻击（尝试或成功）·简化利用漏洞的尝试的解决方案是公开或私下可用的（如利用工具包）",
                            "value": "A"
                        },
                        "Unreported (U)": {
                            "tooltip": "根据威胁情报来源，以下各项必须适用：·不知道公开的概念证明·不知道有人试图利用此漏洞进行攻击·不知道用于简化利用漏洞的尝试的公开解决方案",
                            "value": "U"
                        }
                    },
                    "short": "E",
                    "selected": "X"
                }
            }
        }, "fill": "consumer"
    },
}
