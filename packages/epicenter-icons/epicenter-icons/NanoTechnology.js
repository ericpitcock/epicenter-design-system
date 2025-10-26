import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 16L10 13M14 11L19 8M12 5V10M12 14V19M5 8L10 11M14 13L19 16', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20.5 9.00001V14.5M13.5 20L19 17M4.5 17.5L10.5 20M3.5 15V9.00001M5 6.5L10.5 4M19 6.5L13.5 4', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '12', 'cy': '3.5', 'r': '1.5', 'stroke-linejoin': 'round' })
const _hoisted4 = h('circle', { 'cx': '12', 'cy': '20.5', 'r': '1.5', 'stroke-linejoin': 'round' })
const _hoisted5 = h('circle', { 'cx': '3.5', 'cy': '7.5', 'r': '1.5', 'stroke-linejoin': 'round' })
const _hoisted6 = h('circle', { 'cx': '20.5', 'cy': '7.5', 'r': '1.5', 'stroke-linejoin': 'round' })
const _hoisted7 = h('circle', { 'cx': '20.5', 'cy': '16.5', 'r': '1.5', 'stroke-linejoin': 'round' })
const _hoisted8 = h('circle', { 'cx': '3.5', 'cy': '16.5', 'r': '1.5', 'stroke-linejoin': 'round' })
const _hoisted9 = h('path', { 'd': 'M12 9.75L14 10.875V13.125L12 14.25L10 13.125V10.875L12 9.75Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'NanoTechnology',
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
            _hoisted6,
            _hoisted7,
            _hoisted8,
            _hoisted9
        ])
    }
})
