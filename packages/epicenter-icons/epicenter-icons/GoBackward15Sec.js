import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 5L10 2.20004C10.6462 2.06886 11.3151 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 8.72836 3.57111 5.82368 6 3.99927', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9.50005 16V10L8 11M15.5 10H12.5L12 12.5C12 12.5 13 12 14 12C15.0699 11.983 16 12.8729 16 14C16 15.0897 15 16 14.027 16C13 16 12.5 15.5 12 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'GoBackward15Sec',
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
