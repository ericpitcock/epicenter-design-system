import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C7.52232 2 3.77426 4.94289 2.5 9H5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 8V12L14 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 12C2 12.3373 2.0152 12.6709 2.04494 13M9 22C8.6584 21.8876 8.32471 21.7564 8 21.6078M3.20939 17C3.01655 16.6284 2.84453 16.2433 2.69497 15.8462M4.83122 19.3065C5.1369 19.6358 5.46306 19.9441 5.80755 20.2292', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Clock04',
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
