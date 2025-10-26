import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 6V4C18 2.89543 17.1046 2 16 2H4C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H16C17.1046 22 18 21.1046 18 20V18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21.707 8.87868L21.1212 8.29289C20.7306 7.90237 20.0975 7.90237 19.707 8.29289L12.928 15.0718C12.6488 15.351 12.4585 15.7066 12.3811 16.0938L11.9998 18L13.9061 17.6188C14.2932 17.5413 14.6488 17.351 14.928 17.0718L21.707 10.2929C22.0975 9.90237 22.0975 9.2692 21.707 8.87868Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 10L20 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5 19H6L7.25 16.5L8.5 19H9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M6 6H14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M6 10H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Contracts',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4,
            _hoisted5,
            _hoisted6
        ])
    }
})
