'use client'

import { useState } from 'react'
import styles from './survey.module.css'

function SendOwlLogo() {
  return (
    <svg width="344" height="108" viewBox="0 0 344 108" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M343.61 32.96H334.87V75.35H343.61V32.96ZM231.5 32.97V75.35H223.15V71.81C220.98 74.48 217.85 75.81 213.74 75.81C210.9 75.81 208.33 75.16 206.04 73.87C203.74 72.58 201.94 70.73 200.63 68.33C199.32 65.93 198.67 63.15 198.67 59.99C198.67 56.83 199.32 54.05 200.63 51.65C201.94 49.25 203.74 47.4 206.04 46.11C208.34 44.82 210.91 44.17 213.74 44.17C217.59 44.17 220.59 45.41 222.76 47.88V32.97H231.5ZM220.74 66.18C222.2 64.64 222.92 62.57 222.92 59.98C222.92 57.39 222.19 55.32 220.74 53.78C219.28 52.24 217.45 51.47 215.25 51.47C213.05 51.47 211.16 52.24 209.7 53.78C208.24 55.32 207.52 57.39 207.52 59.98C207.52 62.57 208.25 64.64 209.7 66.18C211.16 67.72 213.01 68.49 215.25 68.49C217.49 68.49 219.28 67.72 220.74 66.18ZM99.64 74.7499C96.75 73.8899 94.42 72.7799 92.66 71.4099L95.74 64.4399C97.42 65.6999 99.42 66.7099 101.74 67.4699C104.06 68.2299 106.37 68.6099 108.69 68.6099C111.27 68.6099 113.17 68.2199 114.4 67.4399C115.63 66.6599 116.25 65.6199 116.25 64.3299C116.25 63.3799 115.89 62.5899 115.16 61.9599C114.43 61.3299 113.5 60.8299 112.36 60.4499C111.22 60.0699 109.68 59.6499 107.74 59.1899C104.75 58.4699 102.31 57.7399 100.4 57.0199C98.49 56.2999 96.86 55.1299 95.5 53.5399C94.14 51.9399 93.46 49.8099 93.46 47.1399C93.46 44.8199 94.08 42.7099 95.31 40.8299C96.54 38.9499 98.4 37.4499 100.89 36.3499C103.37 35.2499 106.41 34.6899 109.99 34.6899C112.49 34.6899 114.94 34.9999 117.33 35.5999C119.72 36.2099 121.81 37.0899 123.61 38.2299L120.81 45.2599C117.19 43.1699 113.56 42.1199 109.94 42.1199C107.4 42.1199 105.52 42.5399 104.31 43.3799C103.1 44.2199 102.49 45.3199 102.49 46.6899C102.49 48.0599 103.19 49.0799 104.59 49.7499C105.99 50.4199 108.13 51.0699 111.01 51.7199C114 52.4399 116.44 53.1699 118.35 53.8899C120.26 54.6099 121.89 55.7599 123.25 57.3199C124.61 58.8799 125.29 60.9999 125.29 63.6599C125.29 65.9499 124.66 68.0299 123.41 69.9199C122.16 71.8099 120.28 73.2999 117.78 74.3999C115.28 75.4999 112.23 76.0599 108.65 76.0599C105.55 76.0599 102.55 75.6299 99.66 74.7699L99.64 74.7499ZM160.23 62.49H137.43C137.84 64.39 138.81 65.9 140.34 67C141.87 68.1 143.78 68.66 146.05 68.66C147.62 68.66 149.01 68.42 150.22 67.95C151.43 67.47 152.56 66.72 153.61 65.69L158.26 70.83C155.42 74.14 151.28 75.8 145.82 75.8C142.42 75.8 139.41 75.12 136.8 73.77C134.19 72.42 132.17 70.54 130.75 68.14C129.33 65.74 128.62 63.02 128.62 59.97C128.62 56.92 129.32 54.25 130.72 51.83C132.12 49.41 134.04 47.53 136.49 46.17C138.94 44.82 141.67 44.14 144.7 44.14C147.73 44.14 150.32 44.79 152.71 46.08C155.1 47.37 156.98 49.23 158.34 51.65C159.7 54.07 160.38 56.88 160.38 60.08C160.38 60.18 160.33 60.84 160.24 62.06L160.21 62.48L160.23 62.49ZM139.78 52.61C138.44 53.75 137.61 55.31 137.32 57.29H152.17C151.87 55.35 151.05 53.8 149.71 52.63C148.37 51.47 146.72 50.89 144.78 50.89C142.84 50.89 141.14 51.46 139.79 52.6L139.78 52.61ZM194.81 57.7499C194.81 53.2499 193.66 49.8699 191.36 47.5799V47.5899C189.06 45.2999 186.04 44.1599 182.31 44.1599C180.25 44.1599 178.37 44.5199 176.65 45.2199C174.94 45.9299 173.5 46.9299 172.34 48.2199V44.6199H163.99V75.3499H172.73V60.1499C172.73 57.4099 173.38 55.3399 174.69 53.9499C176 52.5599 177.76 51.8599 179.96 51.8599C181.94 51.8599 183.45 52.4599 184.5 53.6599C185.55 54.8599 186.07 56.6799 186.07 59.1199V75.3399H194.81V57.7499ZM238.25 65.9499C240.1 69.0899 242.66 71.5599 245.93 73.3499C249.2 75.1499 252.87 76.0399 256.94 76.0399C261.01 76.0399 264.67 75.1399 267.92 73.3499C271.17 71.5599 273.73 69.0899 275.6 65.9499C277.47 62.8099 278.4 59.2799 278.4 55.3499C278.4 51.4199 277.47 47.8899 275.6 44.7499C273.73 41.6099 271.17 39.1399 267.92 37.3499C264.67 35.5599 261.01 34.6599 256.94 34.6599C252.87 34.6599 249.2 35.5599 245.93 37.3499C242.66 39.1399 240.1 41.6099 238.25 44.7499C236.4 47.8899 235.48 51.4199 235.48 55.3499C235.48 59.2799 236.4 62.8099 238.25 65.9499ZM267.61 61.9799C266.54 63.9199 265.08 65.4399 263.21 66.5199C261.34 67.6099 259.24 68.1499 256.93 68.1499C254.62 68.1499 252.53 67.6099 250.66 66.5199C248.79 65.4399 247.32 63.9199 246.26 61.9799C245.19 60.0299 244.66 57.8299 244.66 55.3499C244.66 52.8699 245.19 50.6599 246.26 48.7199C247.33 46.7799 248.79 45.2699 250.66 44.1799C252.52 43.0899 254.61 42.5499 256.93 42.5499C259.25 42.5499 261.34 43.0899 263.21 44.1799C265.08 45.2599 266.54 46.7699 267.61 48.7199C268.68 50.6699 269.21 52.8699 269.21 55.3499C269.21 57.8299 268.67 60.0399 267.61 61.9799ZM331.9 44.61L320.97 75.34H312.57L305.79 56.26L298.79 75.34H290.39L279.52 44.61H287.76L294.88 65.4L302.28 44.61H309.68L316.85 65.4L324.19 44.61H331.9Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M33.77 0C52.42 0 67.54 14.75 67.54 32.94V105.51C67.54 106.36 66.83 107.05 65.96 107.05H50.66C22.68 107.06 0 84.94 0 57.65V32.94C0 14.75 15.12 0 33.77 0ZM5.28 51.11C4.76 51.11 4.33 51.47 4.24 51.95L4.22 52.14V58.39C4.63 82.81 24.85 102.54 49.89 102.93H50.65H62.61C62.95 102.93 63.23 102.69 63.3 102.38V102.24L63.31 99.49C63.31 99.16 63.07 98.88 62.75 98.82H62.61L50.65 98.81H49.92C27.19 98.43 8.83 80.52 8.45 58.35V57.63V55.04C8.45 54.88 8.41 54.72 8.34 54.58L8.26 54.44L6.15 51.52C5.95 51.25 5.63 51.08 5.29 51.08L5.28 51.11ZM13.78 59.67C13.2 59.71 12.76 60.21 12.81 60.77C12.84 61.17 12.87 61.51 12.9 61.8C14.99 80.09 30.71 94.36 49.93 94.7H50.65H62.61C62.95 94.7 63.23 94.46 63.3 94.15V94.01L63.31 91.26C63.31 90.93 63.07 90.65 62.75 90.59H62.61L50.65 90.58H49.99C33.82 90.27 20.43 78.87 17.49 63.86C17.43 63.54 17.33 62.94 17.2 62.06C17.17 61.83 17.05 61.62 16.88 61.46L16.74 61.35L14.45 59.83C14.25 59.7 14.02 59.64 13.78 59.66V59.67ZM23.15 64.22L22.96 64.25C22.4 64.4 22.07 64.97 22.22 65.51C22.28 65.72 22.33 65.91 22.38 66.07C26.01 77.67 36.93 86.16 49.93 86.46H50.64H62.6C62.94 86.46 63.22 86.22 63.29 85.91V85.77L63.3 83.02C63.3 82.69 63.06 82.41 62.74 82.35H62.6L50.64 82.34H50C39.79 82.08 31.08 75.94 27.31 67.26C27.16 66.91 26.95 66.36 26.67 65.6C26.58 65.35 26.4 65.15 26.16 65.03L25.97 64.96L23.52 64.25L23.33 64.21H23.14L23.15 64.22ZM32.96 65.8C32.79 65.8 32.62 65.84 32.47 65.91C31.95 66.17 31.75 66.79 32.02 67.3C32.17 67.59 32.3 67.83 32.42 68.02C35.97 73.95 42.48 77.99 49.97 78.22H50.65L62.61 78.23C62.95 78.23 63.23 77.99 63.3 77.68V77.54L63.31 74.79C63.31 74.46 63.07 74.18 62.75 74.12H62.61L50.65 74.11H50.12C45.01 73.95 40.47 71.58 37.48 67.95C37.17 67.58 36.78 67.02 36.29 66.28C36.13 66.04 35.87 65.87 35.58 65.82L35.4 65.8H32.95H32.96ZM44.91 64.04L44.73 64.07L42.29 64.74C42.12 64.79 41.96 64.88 41.84 65C41.43 65.4 41.42 66.05 41.83 66.46C42.23 66.85 42.57 67.16 42.87 67.39C44.86 68.91 47.34 69.86 50.04 69.99H50.67L62.63 70C62.97 70 63.25 69.76 63.32 69.45V69.31L63.33 66.56C63.33 66.23 63.09 65.95 62.77 65.89H62.63L50.67 65.88H50.25C49.22 65.82 48.25 65.59 47.35 65.22C46.92 65.04 46.34 64.71 45.64 64.22C45.43 64.08 45.18 64.02 44.93 64.04H44.91ZM6.53 22.15L6.33 22.65V22.22C4.97 25.53 4.22 29.15 4.22 32.94C4.22 48.86 17.45 61.76 33.76 61.76C50.07 61.76 63.3 48.86 63.3 32.94C63.3 29.47 62.67 26.14 61.52 23.05L61.19 22.22V22.65C55.31 7.35 35.16 14.41 35.16 26.77C35.16 28.83 32.35 28.83 32.35 26.77C32.35 14.54 13.06 6.35 6.52 22.15H6.53ZM62.61 57.65H56.44C56.28 57.65 56.12 57.69 55.97 57.76L55.83 57.84L52.28 60.29C52.06 60.44 51.93 60.69 51.93 60.95C51.93 61.34 52.22 61.67 52.6 61.75L52.77 61.77H62.62C62.96 61.77 63.24 61.53 63.31 61.22V61.08L63.32 58.33V58.19C63.24 57.88 62.96 57.64 62.62 57.64L62.61 57.65ZM18.99 20.59C22.49 20.59 25.32 23.36 25.32 26.77C25.32 30.18 22.49 32.95 18.99 32.95C15.49 32.95 12.66 30.18 12.66 26.77C12.66 23.36 15.49 20.59 18.99 20.59ZM48.54 20.59C52.04 20.59 54.87 23.36 54.87 26.77C54.87 30.18 52.04 32.95 48.54 32.95C45.04 32.95 42.21 30.18 42.21 26.77C42.21 23.36 45.04 20.59 48.54 20.59Z" fill="currentColor"/>
    </svg>
  )
}

const tabs = ['Survey', 'Email Messaging', 'Philosophy'] as const
type Tab = typeof tabs[number]

const REVENUE_OPTIONS = ['Brand Deals', 'Courses', 'Coaching', 'Digital Products', 'Affiliate Marketing', 'Other']
const PLATFORM_OPTIONS = ['Instagram', 'YouTube', 'TikTok', 'X', 'Newsletter', 'Digital storefront / selling tool', 'Own website']
const TEAM_OPTIONS = ['Solo', 'Me + part-time contractors', 'Me + full-time employee(s)']
const RANGE_VALUES = ['0', '1-2', '3-5', '6-10', '10+']

const TIME_CATEGORIES = {
  'Content Production': [
    'Drafting content / scripts / posts',
    'Filming / recording / material creation',
    'Editing',
    'Drafting social posts',
  ],
  'Growth & Community': [
    'Responding to comments / DMs',
    'Community management (Discord, Slack, etc.)',
    'Newsletter / email marketing',
    'Pitching brands on partnerships',
    'Analytics (reviewing sales, content views, etc.)',
  ],
  'Admin': [
    'Reviewing legal documents (brand deal contracts)',
    'Accounting (bookkeeping, payments)',
    'Coordination (brands, team, meetings)',
  ],
}

const OWNERSHIP_ITEMS = [
  'Content Drafting',
  'Content Editing',
  'DM / Comment Management',
  'Brand deal coordination',
  'Digital product + website management',
  'Admin / Legal',
]
const OWNERSHIP_VALUES = ['Me', 'Team', 'Both', 'N/A']

function RankSelector({ options, selected, onToggle }: {
  options: string[]
  selected: string[]
  onToggle: (item: string) => void
}) {
  return (
    <div className={styles.mockInput}>
      {options.map((option) => {
        const rank = selected.indexOf(option)
        const isRanked = rank !== -1
        const isFull = selected.length >= 3

        return (
          <button
            key={option}
            type="button"
            className={isRanked ? styles.rankItem : styles.rankItemDim}
            onClick={() => onToggle(option)}
            style={{ cursor: isRanked || !isFull ? 'pointer' : 'default', opacity: !isRanked && isFull ? 0.4 : 1 }}
          >
            {isRanked && <span className={styles.rankNum}>{rank + 1}</span>}
            {option}
          </button>
        )
      })}
    </div>
  )
}

function RangeChips({ value, onChange }: {
  value: string | null
  onChange: (val: string) => void
}) {
  return (
    <div className={styles.rangeOptions}>
      {RANGE_VALUES.map((v) => (
        <button
          key={v}
          type="button"
          className={`${styles.rangeChip} ${value === v ? styles.rangeChipSelected : ''}`}
          onClick={() => onChange(v)}
        >
          {v}
        </button>
      ))}
    </div>
  )
}

function SurveyTab() {
  const [revenueRank, setRevenueRank] = useState<string[]>([])
  const [platformRank, setPlatformRank] = useState<string[]>([])
  const [teamStructure, setTeamStructure] = useState<string | null>(null)
  const [automate, setAutomate] = useState('')
  const [dread, setDread] = useState('')
  const [timeValues, setTimeValues] = useState<Record<string, string | null>>({})
  const [ownership, setOwnership] = useState<Record<string, string | null>>({})
  const [reviewHours, setReviewHours] = useState<string | null>(null)
  const [wrapUp, setWrapUp] = useState('')

  const isSolo = teamStructure === 'Solo'

  function toggleRank(list: string[], setList: (v: string[]) => void, item: string) {
    const idx = list.indexOf(item)
    if (idx !== -1) {
      setList(list.filter((i) => i !== item))
    } else if (list.length < 3) {
      setList([...list, item])
    }
  }

  function setTime(activity: string, value: string) {
    setTimeValues((prev) => ({ ...prev, [activity]: value }))
  }

  function setOwner(item: string, value: string) {
    setOwnership((prev) => ({ ...prev, [item]: value }))
  }

  return (
    <div className={styles.tabContent}>
      <div className={styles.surveyHeader}>
        <h2>Creator Workflow Survey</h2>
        <p className={styles.subtitle}>Revised version, trimmed ~18% for creators with teams, ~43% for solo creators</p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>~4 min</span>
            <span className={styles.statLabel}>Estimated completion</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{isSolo ? '12' : '12-19'}</span>
            <span className={styles.statLabel}>Questions {isSolo ? '(solo mode)' : '(team-dependent)'}</span>
          </div>
        </div>
      </div>

      {/* Part 1 */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.partLabel}>Part 1</span>
          <h3>Your Business</h3>
        </div>

        <div className={styles.question}>
          <div className={styles.questionLabel}>
            <span className={styles.qNumber}>1</span>
            <span>Rank your top revenue streams (click to rank top 3)</span>
          </div>
          <p className={styles.questionHint}>Click to select in order — click again to deselect</p>
          <RankSelector
            options={REVENUE_OPTIONS}
            selected={revenueRank}
            onToggle={(item) => toggleRank(revenueRank, setRevenueRank, item)}
          />
        </div>

        <div className={styles.question}>
          <div className={styles.questionLabel}>
            <span className={styles.qNumber}>2</span>
            <span>Which platforms do you spend the most time on? (rank top 3)</span>
          </div>
          <p className={styles.questionHint}>Click to select in order — click again to deselect</p>
          <RankSelector
            options={PLATFORM_OPTIONS}
            selected={platformRank}
            onToggle={(item) => toggleRank(platformRank, setPlatformRank, item)}
          />
        </div>

        <div className={styles.question}>
          <div className={styles.questionLabel}>
            <span className={styles.qNumber}>3</span>
            <span>What is your current team structure?</span>
          </div>
          <p className={styles.questionHint}>Select one</p>
          <div className={styles.radioGroup}>
            {TEAM_OPTIONS.map((option) => (
              <label
                key={option}
                className={styles.radioOption}
                onClick={() => setTeamStructure(option)}
              >
                <span className={`${styles.radio} ${teamStructure === option ? styles.radioSelected : ''}`}></span>
                {option}
              </label>
            ))}
          </div>
          <div className={styles.routingNote}>
            {isSolo
              ? 'Solo selected — Part 4 (Your Team) will be skipped'
              : 'If "Solo" is selected, Part 4 is skipped entirely'}
          </div>
        </div>
      </div>

      {/* Part 2 */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.partLabel}>Part 2</span>
          <h3>What You&apos;d Change</h3>
          <span className={styles.changeTag}>Was 3 questions, now 2</span>
        </div>

        <div className={styles.question}>
          <div className={styles.questionLabel}>
            <span className={styles.qNumber}>4</span>
            <span>If you could magically automate one specific task so it was done perfectly without your input, what would it be?</span>
          </div>
          <textarea
            className={styles.textarea}
            placeholder="Type your answer here..."
            value={automate}
            onChange={(e) => setAutomate(e.target.value)}
            rows={3}
          />
        </div>

        <div className={styles.question}>
          <div className={styles.questionLabel}>
            <span className={styles.qNumber}>5</span>
            <span>What is the task you dread doing the most?</span>
          </div>
          <textarea
            className={styles.textarea}
            placeholder="Type your answer here..."
            value={dread}
            onChange={(e) => setDread(e.target.value)}
            rows={3}
          />
        </div>

        <div className={styles.removedQuestion}>
          <span className={styles.removedTag}>Removed</span>
          <span>&ldquo;What is the single biggest use of your time outside of creating content?&rdquo; — overlaps with Q4 and Q5</span>
        </div>
      </div>

      {/* Part 3 */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.partLabel}>Part 3</span>
          <h3>Where You Spend Your Time</h3>
          <span className={styles.changeTag}>Ranges replace exact hours, &ldquo;Other&rdquo; fields removed</span>
        </div>

        <p className={styles.sectionIntro}>Estimate your time on each activity in the last 7 days:</p>

        {Object.entries(TIME_CATEGORIES).map(([category, activities]) => (
          <div key={category} className={styles.timeCategory}>
            <h4>{category}</h4>
            <div className={styles.timeGrid}>
              {activities.map((activity) => (
                <div key={activity} className={styles.timeRow}>
                  <span>{activity}</span>
                  <RangeChips
                    value={timeValues[activity] ?? null}
                    onChange={(v) => setTime(activity, v)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className={styles.removedQuestion}>
          <span className={styles.removedTag}>Merged</span>
          <span>&ldquo;Partner coordination&rdquo; + &ldquo;Team coordination&rdquo; combined into single &ldquo;Coordination&rdquo; line</span>
        </div>
        <div className={styles.removedQuestion}>
          <span className={styles.removedTag}>Removed</span>
          <span>All three &ldquo;Other [write in]&rdquo; fields across Part 3 categories — low signal, high friction</span>
        </div>
      </div>

      {/* Part 4 — conditional */}
      {!isSolo && (
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.partLabel}>Part 4</span>
            <h3>Your Team</h3>
            <span className={styles.conditionalTag}>Only shown if not solo</span>
          </div>

          <p className={styles.sectionIntro}>Select who is the primary owner for each:</p>

          <div className={styles.ownershipGrid}>
            <div className={styles.ownershipHeader}>
              <span></span>
              {OWNERSHIP_VALUES.map((v) => <span key={v}>{v}</span>)}
            </div>
            {OWNERSHIP_ITEMS.map((item) => (
              <div key={item} className={styles.ownershipRow}>
                <span>{item}</span>
                {OWNERSHIP_VALUES.map((v) => (
                  <button
                    key={v}
                    type="button"
                    className={`${styles.radioSmall} ${ownership[item] === v ? styles.radioSmallSelected : ''}`}
                    onClick={() => setOwner(item, v)}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className={styles.question}>
            <div className={styles.questionLabel}>
              <span className={styles.qNumber}>Q</span>
              <span>How many hours a week do you spend reviewing or approving work done by your team?</span>
            </div>
            <RangeChips value={reviewHours} onChange={setReviewHours} />
          </div>
        </div>
      )}

      {isSolo && (
        <div className={styles.skippedSection}>
          <span className={styles.conditionalTag}>Skipped</span>
          <span>Part 4 (Your Team) — not shown for solo creators</span>
        </div>
      )}

      {/* Part 5 */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.partLabel}>Part 5</span>
          <h3>Wrap Up</h3>
        </div>

        <div className={styles.question}>
          <div className={styles.questionLabel}>
            <span className={styles.qNumber}>Q</span>
            <span>Anything else you want to share / wish you had to make your life easier?</span>
          </div>
          <textarea
            className={styles.textarea}
            placeholder="Type your answer here... (optional)"
            value={wrapUp}
            onChange={(e) => setWrapUp(e.target.value)}
            rows={4}
          />
        </div>
      </div>
    </div>
  )
}

function MessagingTab() {
  return (
    <div className={styles.tabContent}>
      <div className={styles.surveyHeader}>
        <h2>Email Messaging Options</h2>
        <p className={styles.subtitle}>Five angles to drive survey completions. All from Dani. Plus a recommended send sequence.</p>
      </div>

      <div className={styles.emailOption}>
        <div className={styles.emailLabel}>
          <span className={styles.emailLetter}>A</span>
          <div>
            <h3>The &ldquo;Respect Your Time&rdquo; Angle</h3>
            <p className={styles.emailAngle}>Straightforward ask, offers results back</p>
          </div>
        </div>
        <div className={styles.emailPreview}>
          <div className={styles.emailSubject}>Subject: 4 minutes to make creator tools less broken</div>
          <div className={styles.emailBody}>
            <p>Hey [Name],</p>
            <p>We&apos;re building something for creators like you, but we don&apos;t want to guess what you actually need.</p>
            <p>This survey takes about 4 minutes. It&apos;s short, mostly clicking, and we&apos;re not going to ask you trick questions. Just tell us where your time goes and what you wish was easier.</p>
            <p className={styles.emailCta}>[Take the survey]</p>
            <p>We&apos;ll share the results with everyone who completes it, so you can see how your workflow compares to other creators at your level.</p>
            <p>Dani</p>
          </div>
        </div>
      </div>

      <div className={styles.emailOption}>
        <div className={styles.emailLabel}>
          <span className={styles.emailLetter}>B</span>
          <div>
            <h3>The &ldquo;Honest About It&rdquo; Angle</h3>
            <p className={styles.emailAngle}>Acknowledges that surveys are annoying, explains why this one matters</p>
          </div>
        </div>
        <div className={styles.emailPreview}>
          <div className={styles.emailSubject}>Subject: We know you hate surveys. This one&apos;s worth it.</div>
          <div className={styles.emailBody}>
            <p>Hey [Name],</p>
            <p>I know nobody is excited to fill out a survey. I get it.</p>
            <p>But we&apos;re building tools for creators who spend too much time on admin, brand deal coordination, and everything that isn&apos;t actually creating. And we can&apos;t build the right thing without knowing what&apos;s actually eating your time.</p>
            <p>15 questions. Mostly clicking, barely any typing.</p>
            <p className={styles.emailCta}>[I&apos;ll give you 4 minutes]</p>
            <p>Dani</p>
          </div>
        </div>
      </div>

      <div className={styles.emailOption}>
        <div className={styles.emailLabel}>
          <span className={styles.emailLetter}>C</span>
          <div>
            <h3>The &ldquo;Benchmark&rdquo; Angle</h3>
            <p className={styles.emailAngle}>Competitive curiosity, the survey itself becomes the reward</p>
          </div>
        </div>
        <div className={styles.emailPreview}>
          <div className={styles.emailSubject}>Subject: How do you compare to other full-time creators?</div>
          <div className={styles.emailBody}>
            <p>Hey [Name],</p>
            <p>Ever wonder if other creators spend as much time on admin, brand deal emails, and editing as you do?</p>
            <p>We&apos;re running a short survey across our creator community to find out how full-time creators actually spend their weeks. Complete it and we&apos;ll send you the results, including how your time breakdown compares to the average.</p>
            <p className={styles.emailCta}>[See where you stand]</p>
            <p>Dani</p>
          </div>
        </div>
      </div>

      <div className={styles.emailOption}>
        <div className={styles.emailLabel}>
          <span className={styles.emailLetter}>D</span>
          <div>
            <h3>The &ldquo;Last Chance&rdquo; Nudge</h3>
            <p className={styles.emailAngle}>For non-completers. Social proof + deadline.</p>
          </div>
        </div>
        <div className={styles.emailPreview}>
          <div className={styles.emailSubject}>Subject: Closing Friday</div>
          <div className={styles.emailBody}>
            <p>Hey [Name],</p>
            <p>Quick reminder: our creator workflow survey closes this Friday. We&apos;ve gotten [X] responses so far and the data is already interesting.</p>
            <p>If you haven&apos;t taken it yet, it&apos;s 4 minutes and your answers directly shape what we build next.</p>
            <p className={styles.emailCta}>[Complete the survey]</p>
            <p className={styles.emailNote}>(Already completed it? Thank you. Ignore this.)</p>
            <p>Dani</p>
          </div>
        </div>
      </div>

      <div className={styles.emailOption}>
        <div className={styles.emailLabel}>
          <span className={styles.emailLetter}>E</span>
          <div>
            <h3>The &ldquo;Personal Ask&rdquo; Angle</h3>
            <p className={styles.emailAngle}>Direct from Dani, transparent about what we&apos;re doing and why</p>
          </div>
        </div>
        <div className={styles.emailPreview}>
          <div className={styles.emailSubject}>Subject: A personal ask from Dani</div>
          <div className={styles.emailBody}>
            <p>Hey [Name],</p>
            <p>I&apos;m Dani, GM at SendOwl. I&apos;m writing this myself because I want to be straight with you about what we&apos;re doing.</p>
            <p>We&apos;re trying to build something that actually saves creators time, not another tool that adds to your to-do list. But we keep running into the same problem: we don&apos;t know enough about how <em>you</em> specifically spend your week.</p>
            <p>Would you take 4 minutes to tell us? No login required, no email capture tricks. Just a short survey.</p>
            <p className={styles.emailCta}>[Sure, here&apos;s my 4 minutes]</p>
            <p>I read every response personally. Thank you.</p>
            <p>Dani Zacarias</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.partLabel}>Sequence</span>
          <h3>Recommended Send Order</h3>
        </div>
        <div className={styles.sequence}>
          <div className={styles.sequenceStep}>
            <span className={styles.sequenceNum}>1</span>
            <div>
              <strong>Initial send</strong>
              <p>Option A or C (straightforward, low pressure)</p>
            </div>
          </div>
          <div className={styles.sequenceStep}>
            <span className={styles.sequenceNum}>2</span>
            <div>
              <strong>Reminder (3-5 days later)</strong>
              <p>Option B (different angle, different hook)</p>
            </div>
          </div>
          <div className={styles.sequenceStep}>
            <span className={styles.sequenceNum}>3</span>
            <div>
              <strong>Final nudge (1-2 days before close)</strong>
              <p>Option D (deadline + social proof)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PhilosophyTab() {
  return (
    <div className={styles.tabContent}>
      <div className={styles.surveyHeader}>
        <h2>What Changed and Why</h2>
        <p className={styles.subtitle}>Every cut, merge, and change with the reasoning</p>
      </div>

      <div className={styles.philoSection}>
        <h3>Starting point</h3>
        <p>Original survey: ~28 inputs. Goal: cut 10-20% of inputs without losing signal.</p>
      </div>

      <div className={styles.philoSection}>
        <h3>What we cut</h3>

        <div className={styles.changeCard}>
          <div className={styles.changeHeader}>
            <span className={styles.changeType}>Removed</span>
            <span>&ldquo;What is the single biggest use of your time outside of creating content?&rdquo;</span>
          </div>
          <p>Overlaps with both the &ldquo;automate&rdquo; question and the &ldquo;dread&rdquo; question. We were asking the same thing three ways. The &ldquo;automate&rdquo; question tells us what to build, the &ldquo;dread&rdquo; question tells us the emotional weight. This one was the weakest of the three.</p>
        </div>

        <div className={styles.changeCard}>
          <div className={styles.changeHeader}>
            <span className={styles.changeType}>Removed</span>
            <span>All three &ldquo;Other [write in]&rdquo; fields in Part 3</span>
          </div>
          <p>Write-in &ldquo;Other&rdquo; fields in time-tracking sections rarely produce useful data. People skip them or write &ldquo;misc stuff.&rdquo; If someone has a unique time sink, they&apos;ll mention it in the open-ended wrap-up at the end.</p>
        </div>
      </div>

      <div className={styles.philoSection}>
        <h3>What we merged</h3>

        <div className={styles.changeCard}>
          <div className={styles.changeHeader}>
            <span className={styles.changeType}>Merged</span>
            <span>&ldquo;Partner coordination&rdquo; + &ldquo;Team coordination&rdquo; into one &ldquo;Coordination&rdquo; line</span>
          </div>
          <p>For most creators the distinction between coordinating with brands vs. team vs. meetings is blurry. One combined line captures the same insight. If we need to split them later, we can.</p>
        </div>
      </div>

      <div className={styles.philoSection}>
        <h3>What we changed</h3>

        <div className={styles.changeCard}>
          <div className={styles.changeHeader}>
            <span className={styles.changeType}>Changed</span>
            <span>Exact hour inputs to range selectors (0, 1-2, 3-5, 6-10, 10+)</span>
          </div>
          <p>Blank text fields for hours force people to do math. They stall, they guess wrong, they abandon. Ranges are fast: see the options, tap the one that feels right, move on. We lose some precision, but nobody actually knows they spent &ldquo;4.5 hours&rdquo; on DMs. They know it was &ldquo;a few hours.&rdquo;</p>
        </div>

        <div className={styles.changeCard}>
          <div className={styles.changeHeader}>
            <span className={styles.changeType}>Changed</span>
            <span>Part 4 (Your Team) made conditional on team structure</span>
          </div>
          <p>If someone selects &ldquo;Solo&rdquo; in Part 1, they skip 7 team questions that don&apos;t apply to them. Solo creators get a 12-question survey instead of 19.</p>
        </div>

        <div className={styles.changeCard}>
          <div className={styles.changeHeader}>
            <span className={styles.changeType}>Changed</span>
            <span>Revenue + Platform questions from multicheck to force-rank top 3</span>
          </div>
          <p>Multicheck (&ldquo;select all that apply&rdquo;) gives noisy data. Everyone checks 4-5 things and we can&apos;t tell what matters most. Force-ranking top 3 gives us prioritized signal and is faster for the user.</p>
        </div>
      </div>

      <div className={styles.philoSection}>
        <h3>What stayed</h3>
        <p>The ownership matrix in Part 4, the open-ended wrap-up, and both free-response questions in Part 2. These are the highest-signal parts of the survey.</p>
      </div>

      <div className={styles.philoSection}>
        <h3>The numbers</h3>
        <div className={styles.numbersGrid}>
          <div className={styles.numberCard}>
            <span className={styles.numberBig}>28</span>
            <span className={styles.numberLabel}>Original inputs</span>
          </div>
          <div className={styles.numberCard}>
            <span className={styles.numberBig}>23</span>
            <span className={styles.numberLabel}>Revised (with team)</span>
          </div>
          <div className={styles.numberCard}>
            <span className={styles.numberBig}>16</span>
            <span className={styles.numberLabel}>Revised (solo)</span>
          </div>
          <div className={styles.numberCard}>
            <span className={styles.numberBig}>~18%</span>
            <span className={styles.numberLabel}>Reduction (with team)</span>
          </div>
          <div className={styles.numberCard}>
            <span className={styles.numberBig}>~43%</span>
            <span className={styles.numberLabel}>Reduction (solo)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SurveyPage() {
  const [activeTab, setActiveTab] = useState<Tab>('Survey')

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <SendOwlLogo />
          <span className={styles.badge}>Survey Planning</span>
        </div>
      </div>

      <div className={styles.tabBar}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.content}>
        {activeTab === 'Survey' && <SurveyTab />}
        {activeTab === 'Email Messaging' && <MessagingTab />}
        {activeTab === 'Philosophy' && <PhilosophyTab />}
      </div>
    </div>
  )
}
