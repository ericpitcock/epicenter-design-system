import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.7192 16C21.3698 16 21.8472 15.3886 21.6894 14.7575L19.1894 4.75746C19.0781 4.3123 18.6781 4 18.2192 4H5.78078C5.32191 4 4.92193 4.3123 4.81063 4.75746L2.31063 14.7575C2.15285 15.3886 2.63021 16 3.28078 16H20.7192Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 16V20M12 20H15M12 20H9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 10H20' })
const _hoisted4 = h('path', { 'd': 'M13.9567 4L16 15.83M10.1585 4.25445L8 16' })

export default defineComponent({
    name: 'SolarPanel01',
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
