# Lean Canvas: PlantPal — Smart Plant Care App

| Section | Detail |
|---------|--------|
| **Problem** | 1. 67% of houseplants die from over/under-watering<br>2. No centralized care schedule for multiple plants<br>3. Traveling users have no way to water plants |
| **Customer Segments** | Primary: Urban millennials (25–40) who own 3+ houseplants<br>Secondary: Plant-sitting services & nurseries |
| **Unique Value Prop** | "A Fitbit for your plants — real-time moisture sensors + AI care plans that adjust as your plant grows." |
| **Solution** | • BLE moisture sensor stuck in soil<br>• App sends push notifications when plant needs water<br>• AI identifies plant species from photo and creates care schedule |
| **Channels** | • Instagram/TikTok plant-tok content (organic)<br>• Partnerships with plant shops (in-box flyer)<br>• Kickstarter/Indiegogo campaign |
| **Revenue Streams** | • Sensor: $29 (BOM $8, margin 72%)<br>• Premium app: $4.99/mo (AI insights, multi-user, historical data)<br>• Nursery API: $99/mo for white-label dashboard |
| **Cost Structure** | • Hardware mfg: $15/unit at 10k volume<br>• iOS/Android dev: $12k/mo (3 engineers)<br>• Cloud infra: $2k/mo (Firebase + AWS IoT)<br>• Shipping/logistics: $4/unit |
| **Key Metrics** | • Sensor activation rate > 60%<br>• D7 retention > 40%<br>• Premium conversion > 8%<br>• NPS > 50 |
| **Unfair Advantage** | • Proprietary moisture calibration algorithm (8-month R&D)<br>• Exclusive distribution deal with 15 independent plant shops in NYC/LA<br>• Plant-ID ML model trained on 50k+ labeled species images |

## Validation Steps
1. [x] 200-person waitlist survey: 73% say "definitely would buy"
2. [x] MVP: 3D-printed prototype tested by 12 plant owners for 4 weeks
3. [ ] Pre-sell 500 units on Kickstarter (target: $25k)
4. [ ] Secure 10 additional nursery distribution partners

## Riskiest Assumption
> *"Users will remember to keep the sensor in the soil and change the battery every 6 months."*

**Mitigation:** Low-battery push notification at 15%. Coin cell battery (CR2032) included + refill subscription ($1/mo for 2 batteries).
