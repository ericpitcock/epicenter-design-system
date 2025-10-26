import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 10C19.7909 10 18 8.20914 18 6', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 6C6 8.20914 4.20914 10 2 10', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 21C18 18.7909 19.7909 17 22 17', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M9.25 12L8.5 12.75L9.25 13.5L10 12.75L9.25 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M2 17C4.20914 17 6 18.7909 6 21', 'stroke-linecap': 'round' })
const _hoisted6 = h('path', { 'd': 'M12.5 15.5L14 15V16.5L12.5 15.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M14.5 11V11.01', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted8 = h('path', { 'd': 'M8.5 6L8.86073 3.8356C8.9411 3.35341 9.35829 3 9.84713 3H14.1529C14.6417 3 15.0589 3.35341 15.1393 3.8356L15.5 6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted9 = h('path', { 'd': 'M20 6H4C2.89543 6 2 6.89543 2 8V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V8C22 6.89543 21.1046 6 20 6Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TravelBag',
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
            _hoisted6,
            _hoisted7,
            _hoisted8,
            _hoisted9
        ])
    }
})
