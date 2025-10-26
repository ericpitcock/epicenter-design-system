import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 22V4C3 2.89543 3.89543 2 5 2H14C15.1046 2 16 2.89543 16 4V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 22H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 11H16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M20.001 11L21.001 8.52663L22.001 8.00001V5L19 7L19.001 11H20.001Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M19.4778 11C19.6789 12.3863 20.1452 13.9698 19.9555 15.3799C19.7838 16.657 18.7725 17.6876 17.4425 17.9412C17.1343 18 16.7562 18 16 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M10 13.5L8 16.5H11.0003L9 19.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'EvCharging',
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
