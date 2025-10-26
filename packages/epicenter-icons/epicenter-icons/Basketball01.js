import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 12.9506C8.14512 13.5607 13.5577 8.11477 12.9506 2', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11.0507 22.0012C10.4406 15.856 15.8866 10.4434 22.0013 11.0505', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M17 20C17 12.8203 11.1797 7 4 7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Basketball01',
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
            _hoisted4
        ])
    }
})
