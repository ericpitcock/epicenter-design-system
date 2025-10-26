import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C7.89936 2 4.3752 4.46819 2.83209 8M2 4.5L2.5 8.5L6.5 7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 7.5L12 11M12 11L15 7.5M12 11V16.5M14.5 13H9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CashbackYen',
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
