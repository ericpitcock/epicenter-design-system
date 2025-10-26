import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 15.2349C4.49328 15.2349 6.77053 17.5 6.77053 19.9996M10 19.9996C10 15.5 5.99511 12 2.04522 12', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 19H3.00898', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13.5 6.5L16 9L21 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M13.5 20H20C21.1046 20 22 19.1046 22 18V8M3 9V6C3 4.89543 3.89543 4 5 4H11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'RssConnected01',
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
