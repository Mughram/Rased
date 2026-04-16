import { useMemo, useState } from 'react'
import { coldChainCategories, shipmentCards, shipmentFilters } from '../../data/appData'

const filterToneMap = {
  'عرض الكل': null,
  الخطرة: 'danger',
  'تحت المراقبة': 'warning',
  الآمنة: 'safe',
}

export default function ShipmentsView() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState('عرض الكل')
  const [activeCategory, setActiveCategory] = useState('all')

  const visibleShipments = useMemo(() => {
    return shipmentCards.filter((shipment) => {
      const matchesTone =
        !filterToneMap[activeFilter] || shipment.tone === filterToneMap[activeFilter]
      const matchesCategory =
        activeCategory === 'all' || shipment.category === activeCategory
      const query = searchTerm.trim()
      const matchesSearch =
        !query ||
        shipment.product.includes(query) ||
        shipment.categoryLabel.includes(query) ||
        shipment.route.includes(query) ||
        shipment.driver.includes(query) ||
        String(shipment.id).includes(query)

      return matchesTone && matchesCategory && matchesSearch
    })
  }, [activeCategory, activeFilter, searchTerm])

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <label className="flex h-14 w-full items-center gap-3 rounded-[22px] border border-white/10 bg-[#f4f4f1] px-5 text-[#272822] shadow-[0_12px_30px_rgba(0,0,0,0.16)] lg:max-w-[520px]">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4.25 4.25" />
            </svg>
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="ابحث برقم الشحنة أو النوع أو المسار"
              className="w-full border-0 bg-transparent text-right text-lg text-[#272822] outline-none placeholder:text-[#7a7b75]"
            />
          </label>

          <div className="flex flex-wrap gap-3">
            {shipmentFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`min-w-[132px] rounded-[18px] px-5 py-3 text-base font-semibold transition ${
                  activeFilter === filter
                    ? 'bg-[#7e9691] text-white shadow-[0_10px_20px_rgba(0,0,0,0.16)]'
                    : 'bg-[#62726e] text-[#edf1ef] hover:bg-[#70827d]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-end gap-3">
          {coldChainCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeCategory === category.id
                  ? 'border-[#91b0aa] bg-[#8ca7a2] text-white'
                  : 'border-white/8 bg-[#34372f] text-[#d6d8d1] hover:border-white/18 hover:bg-[#3c4037]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-right">
          <h2 className="text-3xl font-semibold text-white">قائمة الشحنات</h2>
          <p className="mt-2 text-sm text-[#a8aaa2]">
            نتائج مباشرة حسب النوع والخطورة ودرجة الحرارة والمسار.
          </p>
        </div>
        <p className="rounded-full bg-[#31342d] px-4 py-2 text-sm text-[#d9ddd6]">
          {visibleShipments.length} شحنة
        </p>
      </div>

      <div className="space-y-5">
        {visibleShipments.map((shipment) => (
          <article
            key={shipment.id}
            className={`rounded-[30px] border p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] lg:p-7 ${
              shipment.tone === 'danger'
                ? 'border-[#8f7d79] bg-[#5a5e57]'
                : shipment.tone === 'warning'
                  ? 'border-[#7f8173] bg-[#4b4f49]'
                  : 'border-[#5f766d] bg-[#44524d]'
            }`}
          >
            <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
              <div className="space-y-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="text-right">
                    <div className="flex flex-wrap justify-end gap-2">
                      <span className="rounded-full bg-black/15 px-3 py-1 text-xs font-semibold text-white">
                        {shipment.categoryLabel}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          shipment.tone === 'danger'
                            ? 'bg-[#8d6763] text-[#ffb8b0]'
                            : shipment.tone === 'warning'
                              ? 'bg-[#746b58] text-[#ffe0a3]'
                              : 'bg-[#55776b] text-[#d8fff0]'
                        }`}
                      >
                        {shipment.tag}
                      </span>
                    </div>
                    <p className="mt-4 text-3xl font-semibold text-white">
                      {shipment.product}
                    </p>
                    <p
                      className={`mt-2 text-lg ${
                        shipment.tone === 'safe'
                          ? 'text-[#d5ffe8]'
                          : shipment.tone === 'warning'
                            ? 'text-[#ffe0a3]'
                            : 'text-[#ffb0aa]'
                      }`}
                    >
                      {shipment.risk}
                    </p>
                    <p className="mt-2 text-lg text-[#ddd8d0]">{shipment.timeLeft}</p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="text-right">
                    <p className="text-base text-[#d7d9d2]">درجة الحرارة</p>
                    <p className="mt-2 text-4xl font-semibold text-white">
                      {shipment.temperature}
                    </p>
                    <p className="mt-2 text-sm text-[#cfd2cb]">
                      المدى المطلوب: {shipment.targetTemperature}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-base text-[#d7d9d2]">المسار</p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                      {shipment.route}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-base text-[#d7d9d2]">الوجهة</p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                      {shipment.market}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-base text-[#d7d9d2]">الوصول المتوقع</p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                      {shipment.eta}
                    </p>
                  </div>
                </div>

                <div
                  className={`rounded-[18px] border px-5 py-4 text-lg leading-8 ${
                    shipment.tone === 'safe'
                      ? 'border-[#6b9483] bg-[#3c5e55] text-[#d8fff0]'
                      : shipment.tone === 'warning'
                        ? 'border-[#8f7b52] bg-[#645437] text-[#ffe0a3]'
                        : 'border-[#935750] bg-[#70423d] text-[#ffb1a9]'
                  }`}
                >
                  {shipment.warning}
                </div>
              </div>

              <div className="flex w-full max-w-[360px] flex-col justify-between gap-5 self-stretch rounded-[24px] bg-[#3f433d] p-5">
                <div className="text-right">
                  <p className="text-4xl font-bold text-white">شحنة #{shipment.id}</p>
                  <p className="mt-3 text-base text-[#bfc1bb]">{shipment.status}</p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-sm text-[#b5b7b0]">الكمية</p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        {shipment.quantity}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-[#b5b7b0]">المركبة</p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        {shipment.vehicle}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-[#b5b7b0]">الرطوبة</p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        {shipment.humidity}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-[#b5b7b0]">الموقع الحالي</p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        {shipment.zone}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3">
                  <div className="text-right">
                    <p className="text-sm font-semibold text-white">
                      {shipment.driver}
                    </p>
                    <p className="mt-1 text-xs text-[#b5b7b0]">سائق الشحنة</p>
                  </div>
                  <div className="h-16 w-16 overflow-hidden rounded-[18px] bg-[#22241f]">
                    <img
                      src={shipment.avatar}
                      alt={shipment.driver}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}

        {visibleShipments.length === 0 ? (
          <div className="rounded-[24px] border border-dashed border-white/12 bg-[#2d302a] p-8 text-center text-[#cfd2cb]">
            لا توجد نتائج مطابقة للفلاتر الحالية.
          </div>
        ) : null}
      </div>
    </section>
  )
}
