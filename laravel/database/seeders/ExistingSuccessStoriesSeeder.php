<?php

namespace Database\Seeders;

use App\Models\SuccessStory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ExistingSuccessStoriesSeeder extends Seeder
{
    public function run(): void
    {
        foreach ($this->stories() as $story) {
            $slug = Str::slug($story['title']);
            $imagePath = $this->copyImage($story['image'], $slug);

            SuccessStory::updateOrCreate(
                ['slug' => $slug],
                [
                    'title' => $story['title'],
                    'published_at' => $story['published_at'],
                    'excerpt' => $story['excerpt'],
                    'body' => $story['body'],
                    'image_path' => $imagePath,
                    'is_published' => true,
                ]
            );
        }
    }

    private function copyImage(string $publicPath, string $slug): ?string
    {
        $source = base_path('../public/'.ltrim($publicPath, '/'));
        if (! File::exists($source)) {
            return null;
        }

        $extension = pathinfo($source, PATHINFO_EXTENSION) ?: 'jpg';
        $target = "success-stories/{$slug}.{$extension}";

        Storage::disk('public')->put($target, File::get($source));

        return $target;
    }

    private function stories(): array
    {
        return [
            [
                'title' => "Celebrating a Legacy of Service: Sister Ellen Maseve's Silver Jubilee",
                'published_at' => '2026-02-14',
                'image' => '/review-pics/silver-jubilee-sister-ellen-maseve.jpg',
                'excerpt' => 'Mashambanzou Care Trust joined the Little Company of Mary Sisters in celebrating Sister Ellen Maseve’s Silver Jubilee of religious profession.',
                'body' => <<<'TEXT'
Mashambanzou Care Trust was honoured to join in celebrating the Silver Jubilee of religious profession of Sister Ellen Maseve on 14 February 2026. The thanksgiving mass, held at Our Lady of Wayside Roman Catholic Church, brought together members of the Little Company of Mary Sisters of the Queen of Peace Region, alongside invited guests and well-wishers.

This remarkable milestone marks 25 years of Sister Ellen's unwavering dedication, faith, and service to humanity. Her commitment has been a source of inspiration, not only within the religious community but also to organisations like Mashambanzou Care Trust that continue to benefit from her guidance and compassion.

The Mashambanzou Care Trust Board, Management, and Staff extend their heartfelt gratitude for her selfless leadership and enduring support over the years. Sister Ellen's journey reflects a life devoted to uplifting others and strengthening communities.

As we celebrate this significant achievement, we wish her many more years of impactful service, inspiring leadership, and boundless compassion.
TEXT,
            ],
            [
                'title' => "Mary's Journey: Restored Hope in Tafara",
                'published_at' => '2026-02-16',
                'image' => '/review-pics/mary-tafara-restored-hope.png',
                'excerpt' => 'A wheelchair donation helped restore mobility, dignity and hope for Mary after years of immobility.',
                'body' => <<<'TEXT'
The month of February marked a moment of restored hope in Tafara, as Mary (not her real name) received a life-changing gift of a wheelchair after years of immobility and getting assistance to move from one place to the other from her two brothers.

Mary's journey has been one of deep struggle and remarkable resilience. Her first husband died in 2004 and left her with a child. She later returned to her parents' home as her own health began to decline in 2005. In 2007, after encouragement by her friend she sought medical help at Mashambanzou Care Trust, and was diagnosed HIV positive. She received treatment and was further referred to Wilkins Hospital for further care. For a time, she regained strength and worked to support her family.

But her health took a devastating turn. She began losing power in her legs ("kushaya simba"). The pain intensified ("tsinga dzakatanga kurwadza") and soon she could not walk. She lost weight, vomited frequently, and even the smell of food made her ill.

"I could not carry a bucket of water; even 2 kilograms was too heavy for me," she recalls.

Her condition worsened until she was completely immobile, her legs bending and deforming. Unable to walk or use her hands, Mary became fully dependent on her two brothers and child for everyday care. Yet through it all, she never defaulted on her treatment.

Since 2017, Mashambanzou Care Trust through the funding from the Little Company of Mary Sisters of the Roman Catholic Church has stood by Mary through its home-based care programme and outreach clinics, walking every step of this difficult journey with her.

That journey took a hopeful turn when, through the generosity of the Mayor of the City of Harare Cheer Fund, led by the Mayoress, Mrs Elizabeth Mafume, and with support from Green Light International Trust, Mashambanzou Care Trust received mobility aids to support vulnerable clients. On 16 February 2026, Mary was gifted with one of the donated wheelchairs.

This simple yet powerful intervention is more than just a wheelchair, it is a gateway to dignity and renewed life. It will allow Mary to move again, feel the warmth of the sun, and reconnect with her community. It also brings relief to her brothers, who had carried her from place to place for years.

Mary's story is one of endurance, love, and restored hope, a powerful reminder that even in the most difficult circumstances, compassion and support can transform lives.
TEXT,
            ],
            [
                'title' => 'Bringing Care Closer to Home: Transforming Lives Through Outreach Clinics in Mbare',
                'published_at' => '2026-02-18',
                'image' => '/review-pics/mbare-outreach-care-closer.png',
                'excerpt' => 'Mobile outreach clinics in Mbare are helping people living with HIV access private, compassionate and integrated care.',
                'body' => <<<'TEXT'
Mashambanzou Care Trust's outreach clinic, implemented in partnership with the Little Company of Mary Sisters of the Roman Catholic Church, is transforming lives in Mbare - one patient at a time.

For many people living with HIV in the Matapi Flats area, accessing treatment used to come with fear and stigma. Visiting local clinics often meant risking unwanted disclosure within a close-knit community. But through Mashambanzou's mobile outreach services, that narrative is changing.

One beneficiary shared how the programme has brought renewed strength and unity:

"Our community of people living with HIV in Mbare is now stronger. We are able to work again because of the treatment we are receiving privately from Mashambanzou Care Trust. We are no longer afraid of stigma from local clinics. We are forever grateful."

The outreach team conducts mobile clinics in Mbare twice a month, providing not only treatment but also holistic care. Patients receive psychosocial support from trained counsellors, while those with complex needs are assessed by social workers to ensure tailored assistance.

This integrated approach, combining medical care, counselling and social support has helped restore dignity, improve health outcomes and rebuild confidence among patients who once felt isolated.

The initiative is made possible through the support of the Little Company of Mary Sisters, the Oak Foundation's emergency fund, and other well-wishers. Together, these partnerships are creating safe, accessible spaces for care, proving that compassionate, community-based interventions can break barriers and change lives.
TEXT,
            ],
            [
                'title' => 'Launching the “Care for Health Project”: Expanding Access, Reducing Stigma',
                'published_at' => '2026-02-20',
                'image' => '/review-pics/care-for-health-project-training.png',
                'excerpt' => 'The Care for Health Project expands community access to HIV, TB, Hepatitis C and STI services through training and pop-up clinics.',
                'body' => <<<'TEXT'
Mashambanzou Care Trust is proud to announce the launch of the Care for Health Project, a 10-month initiative funded by the AIDS Healthcare Foundation. The project will be implemented specifically in Hopley and Kuwadzana, and in Goromonzi District, with the goal of increasing demand and uptake of services for HIV, Tuberculosis (TB), Hepatitis C, and Sexually Transmitted Infections (STIs).

At the heart of the project is strengthening community access to integrated health services. Nurses from three local clinics in the targeted areas, working alongside Mashambanzou Care Trust staff, have already received specialised training in HIV and Hepatitis C testing. In addition, Community Care Givers have been trained in the use of self-test kits, enabling them to support and guide community members in accessing testing services more conveniently and confidently.

To reach those most at risk, the project will roll out pop-up clinics in identified hotspot areas, as well as outreach clinics designed to bring services directly to communities with limited access to healthcare. These mobile and community-based approaches aim to close gaps in service delivery and ensure no one is left behind.

Counselling services will also form a key component of the programme, offering a comprehensive package of care that supports not only physical health but also emotional and psychological well-being.

Equally important is the project's focus on information dissemination and stigma reduction. Through targeted awareness campaigns, communities will be equipped with accurate information about HIV, TB, Hepatitis C, and STIs, helping to break down misconceptions and encourage early health-seeking behaviour.

The Care for Health Project reflects Mashambanzou Care Trust's continued commitment to improving health outcomes through inclusive, community-driven interventions, bringing services closer to the people and fostering healthier, stigma-free communities.
TEXT,
            ],
            [
                'title' => 'Strengthening Gender Sensitivity in Community-Based Work',
                'published_at' => '2026-02-25',
                'image' => '/review-pics/gender-analysis-training-2026.jpg',
                'excerpt' => 'A two-day Gender Analysis training helped strengthen gender responsiveness in community-based care and support.',
                'body' => <<<'TEXT'
On 25-26 February 2026, Mashambanzou Care Trust successfully hosted a two-day Gender Analysis training aimed at strengthening gender responsiveness in community-based work. The training brought together MCT Community Care Givers, Peer Mentors, Men of Purpose, and MCT staff, and was facilitated by an experienced Gender Expert.

Over the course of the training, participants gained a deeper understanding of what gender analysis entails, explored gender roles within communities, and examined how gender dynamics influence the effectiveness of community interventions. Emphasis was placed on the importance of objectivity and gender sensitivity in service delivery.

The sessions provided a safe and engaging space for reflection, dialogue, and practical learning. Participants critically reflected on how cultural norms and societal expectations shape access to opportunities, responsibilities, and decision-making power among women, men, girls, and boys.

As a result of the training, the Mashambanzou team is now better equipped to deliver inclusive and equitable services, address gender-based barriers in care and support, and promote fairness and dignity in all community interventions.

MCT remains committed to ensuring that its programmes are responsive, inclusive and sensitive to the diverse needs of the communities it serves. Through continued capacity building, the organisation is taking meaningful steps towards fostering stronger and more equitable communities.
TEXT,
            ],
            [
                'title' => 'From Survival to Skilled Empowerment: The Journey of Langelihle Moyo',
                'published_at' => '2026-03-01',
                'image' => '/review-pics/langelihle-moyo-caretoshare.png',
                'excerpt' => 'Through Care to Share, Langelihle Moyo moved from hardship into skills training, attachment and a vision for entrepreneurship.',
                'body' => <<<'TEXT'
The Care to Share Project, implemented by Mashambanzou Care Trust and funded by Oak Foundation through Young Africa International, has become a transformative initiative for vulnerable youth seeking sustainable livelihoods. Through a six-month integrated training model combining practical skills from community craftspersons and theoretical instruction from Ruwa Vocational Training Centre, 29 young people were equipped with competencies in motor mechanics and clothing and textiles. After the six months of training, the graduates engaged in a four-month internship programme to strengthen their skills. Among these beneficiaries is Langelihle Moyo, whose journey reflects resilience, determination and the life-changing impact of targeted empowerment programmes.

Langelihle's story begins in a context of vulnerability. Having been married for just over a year, she became a survivor of domestic violence, which forced her to leave her marriage in search of safety and independence. With a young child aged two years and eight months, she turned to informal vending, selling beans and other goods at night to sustain herself and her child. Life was characterised by uncertainty and hardship until a Mashambanzou Care Trust community caregiver identified her and introduced her to the Care to Share Project in 2025. Recognising an opportunity to change her circumstances, Langelihle expressed immediate interest. After a vulnerability assessment was conducted with other prospective beneficiaries by social workers, she was selected and enrolled in the programme.

Despite the demanding nature of her daily life, Langelihle demonstrated exceptional commitment. She attended both theoretical classes and practical sessions spearheaded by a community master craftsperson in Caledonia, where she stays during the day, while continuing her vending activities at night to provide for her child. In addition to technical training in clothing and textiles, she also participated in life skills and entrepreneurship classes, equipping her with business and financial management skills essential for long-term sustainability.

Upon completing the programme, Langelihle secured an attachment at a local workshop specialising in the production of teddy bears. Although her training had primarily focused on garment construction such as dressmaking, she quickly adapted to this new niche within the textile industry. Leveraging her foundational skills, she learnt how to cut and sew teddy bears, expanding her technical versatility and opening up new economic opportunities. Her ability to transfer skills across related industries highlights the effectiveness of the programme's holistic training approach.

Notably, the workshop owner provides a safe and supportive environment, allowing her to bring her child to work. This support has given her peace of mind and enabled her to balance her roles as a mother and a worker without compromising either.

Looking ahead, Langelihle envisions a future of independence and impact. She noted that, "Within the next five years, I see myself owning a teddy bear factory which will not only generate income for myself but also train other vulnerable youths, just as I was trained by Mashambanzou and partners."

Her journey from a survivor of domestic violence to a skilled artisan and aspiring entrepreneur embodies the transformative power of opportunity, support and determination.

Langelihle's story is a powerful testament to how targeted interventions like the Care to Share Project can restore dignity, build resilience and create pathways out of poverty. It underscores the importance of combining technical skills training with psychosocial support and economic empowerment, particularly for vulnerable women and young mothers. Through her journey, Langelihle is not only rebuilding her life but also laying the foundation to uplift others in her community.
TEXT,
            ],
            [
                'title' => 'Opening Doors to Opportunity, From Training to Industry Exposure',
                'published_at' => '2026-03-05',
                'image' => '/review-pics/care-to-share-industry-exposure.png',
                'excerpt' => 'Care to Share graduates moved from training into industrial attachments, building confidence and practical career pathways.',
                'body' => <<<'TEXT'
The Care to Share Project, implemented by Mashambanzou Care Trust and funded by Oak Foundation through Young Africa International, continues to demonstrate its transformative impact on vulnerable youths by bridging the gap between training and formal employment. Out of the 29 young people who completed the six-month training programme, 3 successfully transitioned into four-month industrial attachments with formally registered companies in the Harare Central Business District (CBD). This milestone reflects not only the quality of the training provided but also the growing confidence of industry players in the skills of these young graduates. Among them are Nyasha Gumunhu, Elisha Rutsito and Tanaka Gwatidzo, whose journeys highlight empowerment, resilience and opportunity.

Nyasha Gumunhu, a young mother of a two-year-old son, is currently attached at a clothing manufacturing company where she specialises in clothing and textiles. Within just two months, she has mastered the use of an overlock machine and is now focusing on producing tracksuits and uniforms. Drawing from both the theoretical lessons from Ruwa Vocational Training Centre and practical training from a community master craft person, Nyasha has developed a deeper understanding of fabrics and their applications. Reflecting on her experience, she shared, "The attachment has really improved my skills and boosted my confidence. I now understand different types of materials and which ones are best for different designs." Her attachment has not only strengthened her technical abilities but also positioned her competitively within the fashion industry.

Elisha Rutsito, a 23-year-old aspiring fashion designer, is also thriving in his attachment within the CBD. Despite facing academic setbacks after failing his O-Level examinations, Elisha has found his passion and purpose in the fashion industry. He can now confidently sew tracksuits and T-shirts and operate multiple industrial machines, including the elasticator and flosser machines. His supervisor has described him as a fast learner who quickly adapts to new techniques. Elisha attributes his growth to both the technical training and the life skills sessions, particularly budgeting lessons that have helped him manage his income. "I want to make a name for myself first in the fashion industry before starting my own business, I want to show the world that young people if given the opportunity they can really thrive. Thank you Mashambanzou for believing in us" he explained. In addition to his attachment, Elisha runs a small side business rearing road runner chicken, with a current stock of 15, which he sells to support himself, demonstrating entrepreneurial initiative beyond the programme.

Tanaka, a 19-year-old young woman working in the motor mechanics field, is breaking barriers in a male-dominated industry. Having started her attachment in mid-January at a formal automotive workshop in Harare CBD, she is now able to perform full vehicle servicing and suspension work under supervision. Coming from a disadvantaged background where she had to drop out of school due to financial constraints, Tanaka has embraced this opportunity with determination. She lives with her mother and sibling following the passing of her father when she was 7 years old, and her mother struggles to provide for the family. Despite these challenges, Tanaka has gained confidence and found her voice in the workplace. "At first it was difficult because it's a male-dominated environment, but now I can speak out, ask questions and do the work," she said. She is now planning to obtain a driver's licence to further enhance her career prospects.

The success of Nyasha, Elisha and Tanaka illustrates the tangible impact of the Care to Share Project in empowering vulnerable youth with marketable skills and facilitating their entry into formal industry spaces. Their placements in registered companies within Harare's CBD signify a critical shift from informal survival strategies to structured career pathways. These opportunities not only enhance their technical competencies but also open doors for long-term employment, entrepreneurship and self-reliance. Through such outcomes, the project continues to transform lives, restore hope and build a generation of skilled, confident and economically active young people.
TEXT,
            ],
            [
                'title' => 'A Life-Changing Moment for a 17-year-old who acquired a birth certificate through MCT mobile registration',
                'published_at' => '2026-03-18',
                'image' => '/review-pics/nyabira-mobile-registration-ovc.png',
                'excerpt' => 'A mobile registration exercise in Nyabira helped a 17-year-old receive a birth certificate and begin the national ID process.',
                'body' => <<<'TEXT'
Excitement and hope filled Nyabira from 17-18 March 2026 as Mashambanzou Care Trust partnered with the Zvimba District Registrar's Department to conduct a mobile birth certificate and national identity registration exercise. The outreach, supported under the Family Centred Support Project funded by the Oak Foundation, assisted over 100 Orphan and Vulnerable Children (OVCs) and adults, bringing essential services closer to those who need them most.

Among the many lives touched was that of a 17-year-old boy who had lived most of his life without a birth certificate. Raised by his grandmother after his mother remarried, he had been excluded from his stepfather's home. With his father unknown and no documentation ever secured, his future remained uncertain.

Through the persistence of a Mashambanzou community care giver, the boy's mother was encouraged to come forward. For the first time, she realised she could use her own details to register her son's birth - a step she had never thought possible. With guidance and support, the process was completed.

Because he was above 16, the registration also enabled him to begin the national ID process - an important next step now that he has a birth certificate.

Moments later, the young boy emerged from the registration room overwhelmed with joy, shouting, "I am now counted as a Zimbabwean! I can now look for formal employment without fear or having to explain myself."

His grandmother, visibly relieved, shared her gratitude: "This issue troubled me deeply, but I had no means or support to help my grandson. Today, I am at peace."

This powerful story reflects the transformative impact of ensuring access to a basic human right, legal identity. Mashambanzou Care Trust remains committed to reaching more vulnerable individuals, with similar mobile registration exercises planned for Nyabira Primary School and Lumanda in the coming quarter.

Through partnerships and community-driven interventions, lives are being changed - one identity, one future at a time.
TEXT,
            ],
            [
                'title' => 'Strengthening Impact Through Strategic Planning',
                'published_at' => '2026-03-20',
                'image' => '/review-pics/operational-plan-review-2026.png',
                'excerpt' => 'MCT’s annual operational planning process helped review achievements, risks and priorities for stronger impact.',
                'body' => <<<'TEXT'
Mashambanzou Care Trust (MCT) continues to prioritise effective planning and continuous improvement as it holds its annual operational plan review and planning meeting with management and staff. This important platform brings the team together to reflect on organisational performance and shape the way forward.

During the meeting, the team reviewed 2025 achievements, celebrated good practices, and identified key areas that require strengthening. Open discussions also focused on risks that may affect operations, with practical strategies being developed to address them and ensure more efficient and responsive service delivery.

In addition, MCT was developing its 2026 operational plan, ensuring that all activities are aligned with the organisation's broader strategic plan. This deliberate and inclusive approach to planning reinforces MCT's commitment to accountability, learning, and delivering quality services to the communities it serves.

Through structured reflection and forward-thinking strategies, Mashambanzou Care Trust continues to position itself for greater impact and sustainable growth.
TEXT,
            ],
            [
                'title' => 'Mashambanzou Care Trust Strengthens Regional Collaboration at SAWC Technical Meeting',
                'published_at' => '2026-03-21',
                'image' => '/review-pics/programmes-manager-sawc-meeting.jpg',
                'excerpt' => 'MCT participated in the SAWC Technical Meeting, sharing its work and strengthening regional collaboration opportunities.',
                'body' => <<<'TEXT'
Mashambanzou Care Trust recently participated in the Southern Africa Workcamps Cooperation (SAWC) Technical Meeting held in Hatfield, Harare, Zimbabwe, from 18 to 22 March 2026, under the invitation of Global Exchange Program International (GEPI Zimbabwe). The engagement brought together regional actors committed to community development, youth empowerment, environmental sustainability, and volunteer-driven initiatives.

The Stakeholder Presentation Day, held on 21 March 2026 at Rockwood Spiritual and Formation Centre (29 Rockwood Road, Hatfield), provided Mashambanzou Care Trust with a valuable platform to exhibit its work alongside other like-minded organisations. The organisation showcased its comprehensive programmes focusing on health, social protection, disability inclusion, and community-based care interventions.

During the event, the Programmes Manager delivered a presentation highlighting Mashambanzou Care Trust's work, impact areas, and existing opportunities for collaboration with regional and international partners. The presentation emphasised the organisation's commitment to strengthening community systems through integrated health and social support services, while also exploring partnerships that enhance sustainable development outcomes.

In addition to the formal presentation, Mashambanzou Care Trust actively engaged in networking sessions with various organisations and stakeholders. These interactions provided a space for exchanging ideas, sharing best practices, and identifying potential areas for joint programming and collaboration within the SAWC network.

The SAWC Technical Meeting served as an important platform for strengthening regional cooperation and advancing the role of volunteerism in community development. Mashambanzou Care Trust's participation reaffirmed its commitment to partnership-driven approaches that enhance impact and promote inclusive, community-centred development across Zimbabwe and the region.
TEXT,
            ],
        ];
    }
}
