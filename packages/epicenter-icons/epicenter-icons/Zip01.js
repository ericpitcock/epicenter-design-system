import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11 16H12M12 16H13M12 16V22M12 22H11M12 22H13M15.5 22V16H17.3618C18.0675 16 18.7977 16.3516 18.9492 17.0408C19.0128 17.33 19.0109 17.6038 18.9488 17.8923C18.7936 18.6138 18.0392 19 17.3012 19H16M5.00003 16H8.5L5.00003 22H8.32349', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 12.9978L4.01994 3.99557C4.02238 2.89186 4.91845 1.99877 6.02216 2L12.9958 2.00776L20 8.99481L19.9922 12.9978M13 2.49778V6.99778C13 8.10235 13.8954 8.99778 15 8.99778H19.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Zip01',
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
