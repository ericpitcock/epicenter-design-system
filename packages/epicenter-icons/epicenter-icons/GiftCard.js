import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 9.39877C6 11.1333 6.74161 13 8.79803 13H12C12 12 10.0703 8.46056 7.55019 8.01937C6.73871 7.87731 6 8.53463 6 9.39877Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 9.39877C18 11.1333 17.2584 13 15.202 13H12C12 12 13.9297 8.46056 16.4498 8.01937C17.2613 7.87731 18 8.53463 18 9.39877Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 4V20', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M2 13H22', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M15 16L12 13L9 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'GiftCard',
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
