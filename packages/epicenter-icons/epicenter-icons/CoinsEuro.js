import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14 18C18.4183 18 22 14.4183 22 10C22 5.58172 18.4183 2 14 2C9.58172 2 6 5.58172 6 10C6 14.4183 9.58172 18 14 18Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3.15657 11C2.42523 12.1176 2 13.4535 2 14.8888C2 18.8162 5.18378 22 9.11116 22C10.5465 22 11.8824 21.5748 13 20.8434', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 7.5C16.5 6.5 15.6936 6 14.6056 6C13.1665 6 12 7.16655 12 8.60555V11.3944C12 12.8335 13.1665 14 14.6056 14C15.6936 14 16.5 13.5 17 12.5M11 10H15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CoinsEuro',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
