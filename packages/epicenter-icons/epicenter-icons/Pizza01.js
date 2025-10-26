import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.1506 15.7228C20.6351 15.5738 20.9343 15.085 20.8206 14.5911C20.1485 11.6716 18.8383 9.146 16.8462 7.15385C14.854 5.16169 12.3284 3.85144 9.40884 3.17939C8.91493 3.06569 8.42617 3.36493 8.27712 3.84934L3.05555 20.8195C3.03194 20.8962 3.10381 20.9681 3.18054 20.9444L20.1506 15.7228Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 6C11 7 14.0694 8.83279 16.0003 11.0001', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13.009 12H13', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M13.009 12H13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M5.5 14C6.88071 14 8 12.8807 8 11.5C8 10.4748 7.5 9.5 6.5 9', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M15 16.9999C14.766 15.8588 13.747 15 12.5253 15C11.1306 15 10 16.1192 10 17.4998C10 18.0627 10.1879 18.5822 10.5051 19', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Pizza01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4,
            _hoisted5,
            _hoisted6
        ])
    }
})
