import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2.5 19.5C2.5 20.6046 3.39543 21.5 4.5 21.5L19.5 21.5C20.6046 21.5 21.5 20.6046 21.5 19.5L21.5 4.5C21.5 3.39543 20.6046 2.5 19.5 2.5L4.5 2.5C3.39543 2.5 2.5 3.39543 2.5 4.5L2.5 19.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9.5 9.5C9.5 8.11929 10.6193 7 12 7C13.3807 7 14.5 8.11929 14.5 9.5C14.5 10.5353 13.8707 11.4236 12.9737 11.8033C12.4651 12.0186 12 12.4477 12 13V13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12.0001 17H12.009', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'HelpSquare',
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
