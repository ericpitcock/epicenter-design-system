import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7.5 7H14.5M7.5 11H10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 10V4C19 2.89543 18.1046 2 17 2H5C3.89543 2 3 2.89543 3 4V20C3 21.1046 3.89543 22 5 22H8.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14.9973 19C14.9362 17.5394 14 16.5 14 15.5C14 14 15 13 16.5 13C18 13 19 14 19 15.5C19 16.5 18.0638 17.5394 18.0027 19M21 22H12V21.118C12 20.7393 12.214 20.393 12.5528 20.2236L15 19H18L20.4472 20.2236C20.786 20.393 21 20.7393 21 21.118V22Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Auction',
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
