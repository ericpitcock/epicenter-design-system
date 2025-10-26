import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.9368 10.5C15.9785 10.1889 16 9.87134 16 9.54873C16 5.65582 12.866 2.5 9 2.5C5.13401 2.5 2 5.65582 2 9.54873C2 12.3606 3.63505 14.8687 6 16', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 22L8.9258 11.5159C9.28061 10.8881 9.94586 10.5 10.6669 10.5H22M3 22L6 21.5M3 22L2 19.5M22 10.5L20 8.5M22 10.5L20 12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Reflex',
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
