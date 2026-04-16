import { useMemo, useState } from 'react'
import {
  coldChainCategories,
  dashboardRecommendations,
  shipmentCards,
} from '../../data/appData'

const safetyCircumference = 2 * Math.PI * 44

function formatShipmentCount(count) {
  if (count === 0) return '0 شحنة'
  if (count === 1) return 'شحنة واحدة'
  if (count === 2) return 'شحنتان'
  if (count >= 3 && count <= 10) return `${count} شحنات`
  return `${count} شحنة`
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-right">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
      {subtitle ? (
        <p className="mt-2 max-w-3xl text-sm leading-7 text-[#adb2aa] sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

function SurfaceCard({ children, className = '' }) {
  return (
    <article
      className={`rounded-[24px] border border-white/8 bg-[#31342d] p-5 shadow-[0_16px_36px_rgba(0,0,0,0.16)] ${className}`}
    >
      {children}
    </article>
  )
}

function MetricCard({ icon, title, value, detail }) {
  return (
    <div className="rounded-[20px] border border-white/8 bg-[#373b33] p-4 text-right">
      <div className="mb-4 flex justify-end">
        <div className="rounded-full bg-white/10 p-2 text-[#d5d7d0]">{icon}</div>
      </div>
      <p className="text-sm font-medium text-[#cbd0c8]">{title}</p>
      <p className="mt-3 text-2xl font-extrabold text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-[#aeb3ab]">{detail}</p>
    </div>
  )
}

function CubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="m12 3.75 7 3.5v9.5l-7 3.5-7-3.5v-9.5l7-3.5Z" />
      <path d="M5 7.25 12 11l7-3.75" />
      <path d="M12 11v9.25" />
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M2.75 7.5h10.5v7.75H2.75z" />
      <path d="M13.25 9.75h3.1l2.9 3v2.5h-6" />
      <path d="M16.25 9.75v3h3" />
      <circle cx="7" cy="17.5" r="1.6" />
      <circle cx="17.25" cy="17.5" r="1.6" />
    </svg>
  )
}

function AlertIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M12 4.25 20 18.5H4L12 4.25Z" />
      <path d="M12 9v4.75" />
      <circle cx="12" cy="16.75" r=".85" fill="currentColor" stroke="none" />
    </svg>
  )
}

function RouteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M7.25 6.5a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0Z" />
      <path d="M22.25 17.5a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0Z" />
      <path d="M7 6.5h4.25c1.8 0 3.25 1.45 3.25 3.25v4c0 1.8 1.45 3.25 3.25 3.25H17" />
      <path d="m10.25 4.25 2.5 2.25-2.5 2.25" />
    </svg>
  )
}

function SafetyGauge({ score }) {
  const safetyOffset = safetyCircumference - (score / 100) * safetyCircumference

  return (
    <div className="relative isolate flex h-[112px] w-[112px] items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="-rotate-90 h-full w-full drop-shadow-[0_0_18px_rgba(102,243,160,0.18)]"
        aria-hidden="true"
      >
        <circle
          cx="50"
          cy="50"
          r="44"
          fill="none"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="8"
        />
        <circle
          cx="50"
          cy="50"
          r="44"
          fill="none"
          stroke="#64f39f"
          strokeLinecap="round"
          strokeWidth="8"
          strokeDasharray={safetyCircumference}
          strokeDashoffset={safetyOffset}
        />
      </svg>
      <div className="absolute inset-[10px] rounded-full bg-[#3b3f37]" />
      <div className="absolute text-center">
        <p className="text-[22px] font-extrabold text-white">{score}%</p>
        <p className="text-[11px] font-medium text-[#e6e8e1]">نسبة الأمان</p>
      </div>
    </div>
  )
}

export default function HomeView() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categoryCounts = useMemo(
    () =>
      coldChainCategories.reduce((accumulator, category) => {
        accumulator[category.id] =
          category.id === 'all'
            ? shipmentCards.length
            : shipmentCards.filter((shipment) => shipment.category === category.id)
                .length
        return accumulator
      }, {}),
    [],
  )

  const filteredShipments = useMemo(() => {
    if (activeCategory === 'all') return shipmentCards
    return shipmentCards.filter((shipment) => shipment.category === activeCategory)
  }, [activeCategory])

  const highlightedShipment =
    filteredShipments.find((shipment) => shipment.tone === 'danger') ??
    filteredShipments[0] ??
    shipmentCards[0]

  const safeCount = filteredShipments.filter((shipment) => shipment.tone === 'safe').length
  const warningCount = filteredShipments.filter(
    (shipment) => shipment.tone === 'warning',
  ).length
  const dangerCount = filteredShipments.filter(
    (shipment) => shipment.tone === 'danger',
  ).length
  const totalCount = filteredShipments.length || 1
  const safetyScore = Math.round(
    ((safeCount + warningCount * 0.5) / totalCount) * 100,
  )

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
        <SectionHeading
          title="نظرة عامة"
          subtitle="لوحة متابعة يومية للشحنات المبردة مع مؤشرات تشغيلية واضحة وتوصيات مباشرة."
        />

        <div className="flex flex-wrap justify-end gap-3 xl:max-w-[60%]">
          {coldChainCategories.map((category) => {
            const isActive = activeCategory === category.id
            const count = categoryCounts[category.id] ?? 0

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition sm:text-base ${
                  isActive
                    ? 'border-[#91b0aa] bg-[#8ca7a2] text-white shadow-[0_10px_22px_rgba(34,46,43,0.24)]'
                    : 'border-white/8 bg-[#34372f] text-[#d6d8d1] hover:border-white/18 hover:bg-[#3c4037]'
                }`}
              >
                {category.label}
                <span className="mr-2 text-xs text-inherit/80">
                  {formatShipmentCount(count)}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-12">
        <SurfaceCard className="xl:col-span-8">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_240px]">
            <div className="grid gap-4 md:grid-cols-3">
              <MetricCard
                icon={<TruckIcon />}
                title="إجمالي الشحنات المعروضة"
                value={formatShipmentCount(filteredShipments.length)}
                detail="محدثة حسب الفئة المختارة"
              />
              <MetricCard
                icon={<AlertIcon />}
                title="الشحنات التي تحتاج إلى تدخل"
                value={formatShipmentCount(dangerCount + warningCount)}
                detail={`${formatShipmentCount(dangerCount)} خطرة و${formatShipmentCount(warningCount)} تحت المراقبة`}
              />
              <MetricCard
                icon={<CubeIcon />}
                title="الشحنات المستقرة"
                value={formatShipmentCount(safeCount)}
                detail="ضمن النطاق الحراري المحدد"
              />
            </div>

            <div className="flex flex-col items-center justify-center rounded-[20px] border border-white/8 bg-[#373b33] p-5 text-center">
              <SafetyGauge score={safetyScore} />
              <p className="mt-4 text-lg font-semibold text-white">
                مؤشر الأمان التشغيلي
              </p>
              <p className="mt-2 text-sm leading-7 text-[#c2c6be]">
                يعتمد على حالة الشحنات المعروضة حالياً.
              </p>
            </div>
          </div>
        </SurfaceCard>

        <SurfaceCard className="xl:col-span-4 text-right">
          <p className="text-sm text-[#aeb3ab]">أولوية المتابعة الحالية</p>
          <h3 className="mt-3 text-3xl font-extrabold leading-tight text-white">
            {highlightedShipment.product}
          </h3>
          <p className="mt-2 text-base text-[#d4d8d0]">
            {highlightedShipment.categoryLabel}
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
            <div className="rounded-[18px] bg-[#3a3d36] p-4">
              <p className="text-sm text-[#9ea49a]">درجة الحرارة الحالية</p>
              <p className="mt-2 text-2xl font-bold text-[#ffb0a8]">
                {highlightedShipment.temperature}
              </p>
            </div>
            <div className="rounded-[18px] bg-[#3a3d36] p-4">
              <p className="text-sm text-[#9ea49a]">النطاق الموصى به</p>
              <p className="mt-2 text-lg font-semibold text-white">
                {highlightedShipment.targetTemperature}
              </p>
            </div>
            <div className="rounded-[18px] bg-[#3a3d36] p-4">
              <p className="text-sm text-[#9ea49a]">الموقع الحالي</p>
              <p className="mt-2 text-lg font-semibold text-white">
                {highlightedShipment.zone}
              </p>
            </div>
            <div className="rounded-[18px] bg-[#3a3d36] p-4">
              <p className="text-sm text-[#9ea49a]">الوصول المتوقع</p>
              <p className="mt-2 text-lg font-semibold text-white">
                {highlightedShipment.eta}
              </p>
            </div>
          </div>
        </SurfaceCard>
      </div>

      <div className="grid gap-5 xl:grid-cols-12">
        <SurfaceCard className="xl:col-span-7 text-right">
          <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-4">
            <div className="rounded-full bg-[#6f3b36]/30 p-2 text-[#ffb5ac]">
              <AlertIcon />
            </div>
            <div>
              <p className="text-sm text-[#aeb3ab]">شحنة تحتاج إلى متابعة</p>
              <h3 className="mt-2 text-[28px] font-extrabold leading-tight text-white">
                {highlightedShipment.product}
              </h3>
            </div>
          </div>

          <p className="mt-5 text-sm leading-8 text-[#d4d7d1]">
            {highlightedShipment.warning}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-[18px] bg-[#3a3d36] p-4">
              <p className="text-sm text-[#aab0a7]">المسار</p>
              <p className="mt-2 text-lg font-semibold text-white">
                {highlightedShipment.route}
              </p>
            </div>
            <div className="rounded-[18px] bg-[#3a3d36] p-4">
              <p className="text-sm text-[#aab0a7]">الرطوبة</p>
              <p className="mt-2 text-lg font-semibold text-white">
                {highlightedShipment.humidity}
              </p>
            </div>
          </div>
        </SurfaceCard>

        <SurfaceCard className="xl:col-span-5 text-right">
          <SectionHeading
            title="التوصيات"
            subtitle="قرارات سريعة تساعد على تقليل المخاطر التشغيلية بشكل مباشر."
          />

          <div className="mt-5 space-y-4">
            {dashboardRecommendations.map((item) => (
              <div
                key={item.id}
                className="rounded-[18px] border border-white/8 bg-[#3a3d36] p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="rounded-[14px] bg-[#70766b]/70 p-3 text-[#dce3ff]">
                    <RouteIcon />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-[#cfd4cb]">
                      {item.description}
                    </p>
                    <button
                      type="button"
                      className="mt-4 rounded-[10px] bg-[#8ca7a2] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#9db7b2]"
                    >
                      {item.action}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SurfaceCard>
      </div>
    </section>
  )
}
