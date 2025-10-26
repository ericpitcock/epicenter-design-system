import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 12.9978L4.01994 3.99557C4.02238 2.89186 4.91845 1.99877 6.02216 2L12.9958 2.00776L20 8.99481L19.9922 12.9978M13 2.49778V6.99778C13 8.10235 13.8954 8.99778 15 8.99778H19.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 16H5.75M5.75 16H7.5M5.75 16V22M15 16H12.5V19M12.5 19V22M12.5 19H15M20 16H17.5V19M17.5 19V22M17.5 19H20M10 16V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Tiff01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
