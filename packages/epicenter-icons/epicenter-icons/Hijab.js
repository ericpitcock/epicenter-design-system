import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12.5 5C10.8431 5 9.5 6.34315 9.5 8V10C9.5 11.6569 10.8431 13 12.5 13C14.1569 13 15.5 11.6569 15.5 10V8C15.5 6.34315 14.1569 5 12.5 5Z' })
const _hoisted2 = h('path', { 'd': 'M15.5 10C15.5 12.5 14.9133 14.4 11.5 16C8.08667 17.6 7.5 20 7.5 21' })
const _hoisted3 = h('path', { 'd': 'M9.5 8H15.5', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M18.4998 8C18.4998 4.95214 15.7045 2 12.5 2C9.29554 2 6.49981 4.95214 6.49981 8C6.49981 9.92648 5.15194 14.2463 3.07212 17.236C2.76686 17.6748 2.81344 18.2828 3.23151 18.6159C8.89474 23.128 16.1049 23.128 21.7681 18.6159C22.1862 18.2828 22.2328 17.6748 21.9275 17.236C19.8477 14.2463 18.4998 9.92648 18.4998 8Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Hijab',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 25 24',
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
