import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16.7649 10.9999L7.2352 10.9999C6.79781 10.9999 6.41117 11.2841 6.28071 11.7016L4.40571 17.7017C4.20448 18.3456 4.68554 18.9999 5.36018 18.9999L18.6398 19C19.3145 19 19.7956 18.3457 19.5943 17.7017L17.7193 11.7017C17.5889 11.2842 17.2022 10.9999 16.7649 10.9999Z', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 11V19M19 15H5', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 19V22M12 22H14M12 22H10', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8M12 2.5V2M17.5 8H18M6 8H6.5M15.9999 4.00001L16.4996 3.50001M7.49999 3.5L7.99999 4', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'SolarPanel05',
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
