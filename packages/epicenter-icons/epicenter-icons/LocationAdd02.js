import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.5 10H12M12 10H8.5M12 10L12 13.5M12 10L12 6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 2C7.30558 2 3.5 5.61786 3.5 10.0807C3.5 14.9412 8.21916 17.3692 11.1092 20.806C11.5669 21.3502 12.4531 21.3646 12.9211 20.8292C15.8645 17.4614 20.5 14.8475 20.5 10.0807C20.5 5.61786 16.6944 2 12 2Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LocationAdd02',
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
