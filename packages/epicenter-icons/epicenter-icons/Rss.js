import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13.5 20H20.5C21.6046 20 22.5 19.1046 22.5 18V5C22.5 3.89543 21.6046 3 20.5 3H5.5C4.39543 3 3.5 3.89543 3.5 5V9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3.5 19H3.50898', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2.5 15.2349C4.99328 15.2349 7.27053 17.5 7.27053 19.9996M10.5 19.9996C10.5 15.5 6.49511 12 2.54522 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Rss',
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
