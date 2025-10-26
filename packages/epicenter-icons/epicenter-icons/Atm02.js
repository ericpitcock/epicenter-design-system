import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.1851 19.2363L17.2944 8.64842C17.124 7.69456 16.2944 7 15.3255 7H8.67449C7.70555 7 6.87597 7.69456 6.70564 8.64842L4.81494 19.2363C4.65077 20.1557 5.35764 21 6.29159 21H17.7084C18.6424 21 19.3492 20.1557 19.1851 19.2363Z', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 11C21.8626 10.7762 22 9.98695 22 9.04763V5.01588C22 3.90254 21.1046 3 20 3H4C2.89543 3 2 3.90254 2 5.01588V9.04763C2 9.98695 2.13739 10.7762 3 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11 7L9.5 21', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15 16L15 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-miterlimit': '10' })

export default defineComponent({
    name: 'Atm02',
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
