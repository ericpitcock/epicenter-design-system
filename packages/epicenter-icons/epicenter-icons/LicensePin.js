import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 7H15M7 12H12.5M7 17L11 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12.5 22H4.50002C3.39544 22 2.50001 21.1046 2.50002 20L2.50016 3.99998C2.50017 2.89542 3.39559 2 4.50016 2H17.5C18.6046 2 19.5 2.89543 19.5 4V10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18.5 19H15.5L17 16.5L16.5 14H20.5L20 16.5L21.5 19H18.5ZM18.5 19V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LicensePin',
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
