import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 8.49817H21.5C19.7007 3.74918 14.497 0.998088 9.4604 2.34292C4.09599 3.77528 0.909631 9.25924 2.34347 14.5917C3.77732 19.9241 9.28839 23.0858 14.6528 21.6534C18.6358 20.5899 21.4181 17.2928 22 13.4826', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 7.99841V11.9984L14 13.9984', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Clock03',
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
