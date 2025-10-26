import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2.5 5L5 2.5M2.5 5L5 7.5M2.5 5H8.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12.171 8.37124L14 10.5051L4.25 10.5051C3.2835 10.5051 2.5 11.2886 2.5 12.2551C2.5 13.2216 3.2835 14.0051 4.25 14.0051H10.5V18.5C10.5 20.1569 11.8431 21.5 13.5 21.5H18.5C20.1569 21.5 21.5 20.1569 21.5 18.5V11.57C21.5 10.9015 21.166 10.2772 20.6099 9.90622L14.5883 5.88941C13.9531 5.37331 13.0441 5.36987 12.405 5.88114C11.6369 6.49565 11.5308 7.62437 12.171 8.37124Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PointingLeft03',
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
