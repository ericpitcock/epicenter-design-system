import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.5 4.5V19.5C21.5 20.6046 20.6046 21.5 19.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H19.5C20.6046 2.5 21.5 3.39543 21.5 4.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.5 9.50021C15 8.50021 14.1936 8.00021 13.1056 8.00021C11.6665 8.00021 10.5 9.16676 10.5 10.6058V13.3947C10.5 14.8337 11.6665 16.0002 13.1056 16.0002C14.1936 16.0002 15 15.5002 15.5 14.5002M8.5 12.0002H13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'EuroSquare',
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
