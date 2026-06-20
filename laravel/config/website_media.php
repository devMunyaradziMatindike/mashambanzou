<?php

return [
    'next_site_url' => env('NEXT_SITE_URL', 'http://localhost:3000'),

    'sections' => [
        'home.hero.slideshow' => [
            'label' => 'Homepage hero slideshow',
            'multiple' => true,
            'fallbacks' => [
                ['src' => '/review-pics/outreach.png', 'alt' => 'Outreach clinic visit in the community', 'label' => 'Outreach'],
                ['src' => '/review-pics/MCTR @ 35 celebrations in 2025.jpg', 'alt' => 'Mashambanzou Care Trust 35th anniversary celebration', 'label' => 'Care Unit (MCU)'],
                ['src' => '/review-pics/advocacy.jpg', 'alt' => 'Community advocacy and awareness activities', 'label' => 'Advocacy'],
                ['src' => '/review-pics/hiv testing.jpg', 'alt' => 'HIV testing and counselling support', 'label' => 'HIV testing'],
                ['src' => '/review-pics/caretoshare.jpg', 'alt' => 'Care to Share vocational training and livelihoods', 'label' => 'Livelihoods'],
            ],
        ],
        'home.who-we-are.image' => [
            'label' => 'Homepage - Who we are image',
            'multiple' => false,
            'fallbacks' => [['src' => '/review-pics/Mashambanzou Care Trust (blur faces.jpg', 'alt' => 'Mashambanzou Care Trust community care']],
        ],
        'home.impact.clinical' => [
            'label' => 'Homepage impact card - Clinical Healthcare',
            'multiple' => false,
            'fallbacks' => [['src' => '/review-pics/mashambanzou care unit.jpg', 'alt' => 'Clinical care at Mashambanzou Care Trust']],
        ],
        'home.impact.community' => [
            'label' => 'Homepage impact card - Community Strengthening',
            'multiple' => false,
            'fallbacks' => [['src' => '/review-pics/community-strengthening.png', 'alt' => 'Community members supporting a person in a wheelchair at a Mashambanzou Care Trust outreach']],
        ],
        'home.impact.ovc' => [
            'label' => 'Homepage impact card - OVC Support',
            'multiple' => false,
            'fallbacks' => [['src' => '/review-pics/ovc-support-home.png', 'alt' => 'Young people and children receiving teddy bear gifts at a Mashambanzou Care Trust support activity']],
        ],
        'home.impact.human-rights' => [
            'label' => 'Homepage impact card - Human Rights',
            'multiple' => false,
            'fallbacks' => [['src' => '/review-pics/Institutional Income Generating project.jpg', 'alt' => 'Livelihoods and income-generating project']],
        ],

        'board.hero.slideshow' => [
            'label' => 'Board & Governance hero slideshow',
            'multiple' => true,
            'fallbacks' => [
                ['src' => '/review-pics/house-of-safety-board-governance.jpg', 'alt' => 'House of Safety facility', 'label' => 'House of Safety'],
                ['src' => '/review-pics/disability-inclusion-board-governance.jpg', 'alt' => 'Disability inclusion facility', 'label' => 'Disability inclusion'],
                ['src' => '/review-pics/outreach-programme-board-governance.jpeg', 'alt' => 'Community outreach programme support', 'label' => 'Outreach programme'],
            ],
        ],
        'board.governance.image' => [
            'label' => 'Board & Governance - governance image',
            'multiple' => false,
            'fallbacks' => [['src' => '/review-pics/Mashambanzou Care Trust (blur faces.jpg', 'alt' => 'Mashambanzou Care Trust programme activity']],
        ],
        'board.member.regai-hove' => [
            'label' => 'Board member - Ms Regai Thandiwe Hove',
            'multiple' => false,
            'fallbacks' => [['src' => '/hove.jpeg', 'alt' => 'Ms Regai Thandiwe Hove']],
        ],
        'board.member.john-sampson' => [
            'label' => 'Board member - Mr John G. Sampson',
            'multiple' => false,
            'fallbacks' => [['src' => '/simson.jpeg', 'alt' => 'Mr John G. Sampson']],
        ],
        'board.member.silindiwe-shamu' => [
            'label' => 'Board member - Sr Silindiwe Shamu',
            'multiple' => false,
            'fallbacks' => [['src' => '/board/sister-silindiwe-shamu.png', 'alt' => 'Sr Silindiwe Shamu']],
        ],
        'board.member.abi-belaye' => [
            'label' => 'Board member - Ms Abi Belaye Kebra',
            'multiple' => false,
            'fallbacks' => [['src' => '/belaye.png', 'alt' => 'Ms Abi Belaye Kebra']],
        ],
        'board.member.clemence-duri' => [
            'label' => 'Board member - Dr. Clemence Duri',
            'multiple' => false,
            'fallbacks' => [['src' => '/duri.jpeg', 'alt' => 'Dr. Clemence Duri']],
        ],
        'board.member.flavia-muyambo' => [
            'label' => 'Board member - Mrs Flavia Muyambo',
            'multiple' => false,
            'fallbacks' => [['src' => '/board/mrs-flavia-muyambo.png', 'alt' => 'Mrs Flavia Muyambo']],
        ],

        'management.constance-chigwamba' => [
            'label' => 'Management - Constance Chigwamba',
            'multiple' => false,
            'fallbacks' => [['src' => '/management/director.jpg', 'alt' => 'Constance Chigwamba']],
        ],
        'management.mercy-muirimi' => [
            'label' => 'Management - Mercy Muirimi',
            'multiple' => false,
            'fallbacks' => [['src' => '/management/programmes-manager.png', 'alt' => 'Mercy Muirimi']],
        ],
        'management.mercyline-dzinemarira' => [
            'label' => 'Management - Mercyline Dzinemarira',
            'multiple' => false,
            'fallbacks' => [['src' => '/management/mercyline-dzinemarira.jpeg', 'alt' => 'Mercyline Dzinemarira']],
        ],

        'clinical-healthcare.hero' => [
            'label' => 'Clinical Healthcare hero image',
            'multiple' => false,
            'fallbacks' => [['src' => '/review-pics/mashambanzou care unit.jpg', 'alt' => 'Clinical care services at Mashambanzou Care Unit']],
        ],
        'clinical-healthcare.mcu-feature' => [
            'label' => 'Clinical Healthcare - MCU feature image',
            'multiple' => false,
            'fallbacks' => [['src' => '/review-pics/mashambanzou care unit.jpg', 'alt' => 'Clinical care services at Mashambanzou Care Unit']],
        ],
        'clinical-healthcare.outreach-feature' => [
            'label' => 'Clinical Healthcare - Outreach feature image',
            'multiple' => false,
            'fallbacks' => [['src' => '/review-pics/outreach.png', 'alt' => 'Outreach clinic providing health services in the community']],
        ],

        'community-support.hero' => [
            'label' => 'Community Strengthening hero image',
            'multiple' => false,
            'fallbacks' => [['src' => '/review-pics/community-strengthening.png', 'alt' => 'Community members supporting a person in a wheelchair at a Mashambanzou Care Trust outreach']],
        ],
        'community-support.family-feature' => [
            'label' => 'Community Strengthening - Family Centred Support image',
            'multiple' => false,
            'fallbacks' => [['src' => '/review-pics/community-strengthening.png', 'alt' => 'Community members supporting a person in a wheelchair at a Mashambanzou Care Trust outreach']],
        ],
        'community-support.srhr-feature' => [
            'label' => 'Community Strengthening - SRHR image',
            'multiple' => false,
            'fallbacks' => [['src' => '/review-pics/ovc support.jpg', 'alt' => 'Youth session and community education']],
        ],
        'community-support.gallery' => [
            'label' => 'Community Strengthening gallery',
            'multiple' => true,
            'fallbacks' => [
                ['src' => '/review-pics/MCT and faith.jpg', 'alt' => 'Community members at a support activity', 'label' => 'Access to services and documentation through community outreach.'],
                ['src' => '/review-pics/community-strengthening.png', 'alt' => 'Community members supporting a person in a wheelchair at a Mashambanzou Care Trust outreach', 'label' => 'Improving dignity and safe environments in community spaces.'],
                ['src' => '/review-pics/outreach.png', 'alt' => 'Community support and outreach visit', 'label' => 'Integrated outreach that links people to care and follow-up.'],
            ],
        ],

        'child-protection.hero' => [
            'label' => 'OVC Support hero image',
            'multiple' => false,
            'fallbacks' => [['src' => '/review-pics/putting children first.jpg', 'alt' => 'Teaching and mentoring girls']],
        ],
        'child-protection.education-feature' => [
            'label' => 'OVC Support - Education for Life image',
            'multiple' => false,
            'fallbacks' => [['src' => '/review-pics/ovc support.jpg', 'alt' => 'A child learning practical skills']],
        ],
        'child-protection.ndcc-gallery' => [
            'label' => 'OVC Support - NECDC gallery',
            'multiple' => true,
            'fallbacks' => [
                ['src' => '/review-pics/putting children first.jpg', 'alt' => 'Children supported through Mashambanzou Care Trust programmes', 'label' => 'NECDC main image'],
                ['src' => '/review-pics/ovc support.jpg', 'alt' => 'Orphans and vulnerable children support', 'label' => 'OVC support'],
                ['src' => '/review-pics/child protection.jpg', 'alt' => 'Child protection and learning support', 'label' => 'Child protection'],
            ],
        ],
        'child-protection.houses-of-safety' => [
            'label' => 'OVC Support - Houses of Safety image',
            'multiple' => false,
            'fallbacks' => [['src' => '/review-pics/House of Safety.jpg', 'alt' => 'A family visiting during care']],
        ],
        'child-protection.putting-children-first' => [
            'label' => 'OVC Support - Putting Children First image',
            'multiple' => false,
            'fallbacks' => [['src' => '/review-pics/Putting Children First ( blur faces) copy.jpg', 'alt' => 'Putting Children First programme participants']],
        ],

        'human-rights.hero' => [
            'label' => 'Human Rights hero image',
            'multiple' => false,
            'fallbacks' => [['src' => '/review-pics/advocacy.jpg', 'alt' => 'World AIDS Day advocacy and community engagement']],
        ],
        'human-rights.care-to-share' => [
            'label' => 'Human Rights - Care to Share image',
            'multiple' => false,
            'fallbacks' => [['src' => '/review-pics/Care to Share beneficiary during graduation.jpg', 'alt' => 'Vocational and life-skills learning']],
        ],
        'human-rights.income-generating' => [
            'label' => 'Human Rights - Income generating image',
            'multiple' => false,
            'fallbacks' => [['src' => '/review-pics/Institutional Income Generating project.jpg', 'alt' => 'Income-generating project supporting livelihoods']],
        ],
        'human-rights.gallery' => [
            'label' => 'Human Rights gallery',
            'multiple' => true,
            'fallbacks' => [
                ['src' => '/review-pics/advocacy.jpg', 'alt' => 'World AIDS Day advocacy', 'label' => 'Community awareness and stigma reduction through public events and outreach.'],
                ['src' => '/review-pics/MCT and faith.jpg', 'alt' => 'Community members holding documents', 'label' => 'Linking people to services and documentation through community support.'],
                ['src' => '/review-pics/outreach.png', 'alt' => 'Community outreach programme', 'label' => 'Advocacy that meets people where they are - listening, informing and responding.'],
            ],
        ],
    ],
];
