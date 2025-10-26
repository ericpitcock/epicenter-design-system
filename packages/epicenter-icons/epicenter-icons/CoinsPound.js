import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14 18C18.4183 18 22 14.4183 22 10C22 5.58172 18.4183 2 14 2C9.58172 2 6 5.58172 6 10C6 14.4183 9.58172 18 14 18Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13 20.8434C11.8824 21.5748 10.5465 22 9.11116 22C5.18378 22 2 18.8162 2 14.8888C2 13.4535 2.42523 12.1176 3.15657 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16.5 9V8.5C16.5 7.67157 15.8284 7 15 7C14.1716 7 13.5 7.67157 13.5 8.5V11.5C13.5 12.3284 12.8284 13 12 13H16.5M12.5 10.5H15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CoinsPound',
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
