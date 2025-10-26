import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12.5 6L11.3 7L9.5 7L9.5 8.8L8.5 10L9.5 11.2L9.5 13L11.3 13L12.5 14L13.7 13H15.5L15.5 11.2L16.5 10L15.5 8.8L15.5 7L13.7 7L12.5 6Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20.5 22H6.5C5.39543 22 4.5 21.1046 4.5 20M4.5 20C4.5 18.8954 5.39543 18 6.5 18H20.5V2H6.5C5.39543 2 4.5 2.89543 4.5 4V20ZM20 18C20 18 19 18.7628 19 20C19 21.2372 20 22 20 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Quran02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 25 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
