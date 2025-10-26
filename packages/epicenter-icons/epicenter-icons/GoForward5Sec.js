import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 5L14 2.20004C13.3538 2.06886 12.6849 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 8.72836 20.4289 5.82368 18 3.99927', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13.5 10H10.5L10 12.5C10 12.5 11 12 12 12C13.0699 11.983 14 12.8729 14 14C14 15.0897 13 16 12.027 16C11 16 10.5 15.5 10 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'GoForward5Sec',
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
